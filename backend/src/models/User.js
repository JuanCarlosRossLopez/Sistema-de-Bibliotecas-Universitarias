const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Rol = require('./Rol'); // Aquí importamos el modelo Rol

const User = sequelize.define('User', {
    id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    nomine: {
        type: DataTypes.STRING(8),
        allowNull: true
    },
    mail: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    is_student: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    id_rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Rol,
            key: 'id_rol'
        }
    }
}, {
    tableName: 'users',
    timestamps: false
});

module.exports = User;
