const  {DataTypes} = require('sequelize')
const sequelize = require('../config/db');


const CategoryBooks = sequelize.define('CategoryBooks',{
    id_category:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    category:{
        type:DataTypes.STRING(100),
        allowNull:false
    }
},{
    tableName:'category_books',
    timestamps:false
});

CategoryBooks.associate = function(models) {
    CategoryBooks.belongsToMany(models.Books, {
        through: models.BookPivot,
        foreignKey: 'id_category_id',
        otherKey: 'id_book_id'
    });
};

module.exports=CategoryBooks;
