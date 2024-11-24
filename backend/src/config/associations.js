const Book = require('../models/Book');
const CategoryBooks = require('../models/CategoryBook');
const Status = require('../models/Status');
const BookRent = require('../models/BookRent');
const User = require('../models/User');
const Student = require('../models/Student');
const Rol = require('../models/Rol');

// Definir relaciones uno a uno
User.hasOne(Student, { foreignKey: 'id_user_id' });
Student.belongsTo(User, { foreignKey: 'id_user_id' });

// Definir relaciones uno a muchos
Rol.hasMany(User, { foreignKey: 'id_rol_id' });
User.belongsTo(Rol, { foreignKey: 'id_rol_id' });

// Ejemplo de una relación uno a muchos
BookRent.belongsTo(Status, { foreignKey: 'id_status_id' });
Status.hasMany(BookRent, { foreignKey: 'id_status_id' });

BookRent.belongsTo(User, { foreignKey: 'id_user_id' });
User.hasMany(BookRent, { foreignKey: 'id_user_id' });

BookRent.belongsTo(Book, { foreignKey: 'id_book_id' });
Book.hasMany(BookRent, { foreignKey: 'id_book_id' });


module.exports = {
    User,
    Student,
    Rol,
    BookRent,
    Status,
    Book,
    CategoryBooks
};