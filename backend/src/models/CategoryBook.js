const  {Datatypes} = require('sequelize')

const sequelize = require('../config/db');

const CategoryBooks = sequelize.define('CategoryBooks',{
    id_category:{
        type:Datatypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    category:{
        type:Datatypes.STRING(100),
        allowNull:false
    }
},{
    tableName:'category_books',
    timestamps:false
});


module.exports=CategoryBooks;
