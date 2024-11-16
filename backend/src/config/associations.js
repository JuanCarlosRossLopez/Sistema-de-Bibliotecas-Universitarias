const User = require('../models/User');
const Student = require('../models/Student');
const Rol = require('../models/Rol');
const Book = require('../models/Book');
const CategoryBooks = require('../models/CategoryBook');
const Status = require('../models/Status');
const BookRent = require('../models/BookRent');
// Definir relaciones uno a uno
User.hasOne(Student, { foreignKey: 'id_user_id' });
Student.belongsTo(User, { foreignKey: 'id_user_id' });

// Definir relaciones uno a muchos
Rol.hasMany(User, { foreignKey: 'id_rol_id' });
User.belongsTo(Rol, { foreignKey: 'id_rol_id' });


// Ejemplo de una relación muchos a muchos
BookRent.hasOne(Status,{foreignKey:'id_status_id'});
Status.belongsTo(BookRent,{foreignKey:'id_status_id'});



module.exports = {
    User,
    Student,
    Rol,

};
