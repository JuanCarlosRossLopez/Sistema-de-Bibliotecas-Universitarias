const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const TypeofBook = require('./TypeOfBook');

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
            model: TypeofBook,
            key: 'id_type'
        }
    }
}, {
    tableName: 'books',
    timestamps: false
});

// Define the many-to-many relationship

Books.associate = function(models) {
    Books.belongsToMany(models.CategoryBooks, {
        through: models.BookPivot,
        foreignKey: 'id_book',
        otherKey: 'id_category'
    });
};


module.exports = Books;