const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const typeOfBook= require('./TypeOfBook')
const Books = sequelize.define('Books', {
    id_book: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_book: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    image:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    author: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    number_serie:{
        type:DataTypes.STRING(25),
        allowNull:false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    link_book: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    id_typeofbook_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: typeOfBook,
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
        foreignKey: 'id_book_id',
        otherKey: 'id_category_id',
        onDelete:'CASCADE'
    });
};


module.exports = Books;