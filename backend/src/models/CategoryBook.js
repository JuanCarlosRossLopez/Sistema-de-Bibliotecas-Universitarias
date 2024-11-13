const  {DataTypes} = require('sequelize')
const sequelize = require('../config/db');
const Books = require('./Book');

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

Books.hasMany(CategoryBooks,{foreignKey:'id_category_id'});
CategoryBooks.belongsTo(Books,{foreignKey:'id_category_id'});

module.exports=CategoryBooks;
