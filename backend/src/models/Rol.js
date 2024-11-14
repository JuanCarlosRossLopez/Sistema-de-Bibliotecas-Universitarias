const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Rol = sequelize.define('Rol', {
    id_rol: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_rol: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description_rol: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'rols',
    timestamps: false
});

module.exports = Rol;