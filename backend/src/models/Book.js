const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const CategoryBooks = require('./CategoryBook'); // Asegúrate de que la ruta sea correcta

const Books = sequelize.define('Books', {
    id_book: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    author: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    quantiy: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    link_book: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    id_typeofbook_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'typeofbook',
            key: 'id_type'
        }
    }
}, {
    tableName: 'books',
    timestamps: false
});

// Define the many-to-many relationship


module.exports = Books;