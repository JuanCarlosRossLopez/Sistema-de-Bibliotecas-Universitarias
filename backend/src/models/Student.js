const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Student = sequelize.define('Student', {
    id_student: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tuition: {
        type: DataTypes.STRING(8),
        allowNull: false
    },
    book_rent: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    debt: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
    },
    id_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'students',
    timestamps: false
});

module.exports = Student;
