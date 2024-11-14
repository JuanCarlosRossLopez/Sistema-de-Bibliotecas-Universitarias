const User = require('../models/User');
const Student = require('../models/Student');
const Rol = require('../models/Rol');
const Book = require('../models/Book');
const CategoryBooks = require('../models/CategoryBook');

// Definir relaciones uno a uno
User.hasOne(Student, { foreignKey: 'id_user_id' });
Student.belongsTo(User, { foreignKey: 'id_user_id' });

// Definir relaciones uno a muchos
Rol.hasMany(User, { foreignKey: 'id_rol_id' });
User.belongsTo(Rol, { foreignKey: 'id_rol_id' });

// Ejemplo de una relación muchos a muchos
CategoryBooks.belongsToMany(Book, {
    through: 'BookPivot',
    foreignKey: 'id_category',
    otherKey: 'id_book'
});

Book.belongsToMany(CategoryBooks, {
    through: 'BookPivot',
    foreignKey: 'id_book',
    otherKey: 'id_category'
});

module.exports = {
    User,
    Student,
    Rol,
    Book,
    CategoryBooks
};
