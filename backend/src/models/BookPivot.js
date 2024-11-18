const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const Books = require('./Book');
const CategoryBooks = require('./CategoryBook');

const BookPivot = sequelize.define('BookPivot',{
    id_book_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        references:{
            model:Books,
            key:'id_book'
        }
    },
    id_category_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        references:{
            model:CategoryBooks,
            key:'id_category'
        }
    }
},{
    tableName:'book_pivot',
    timestamps:false
});



module.exports=BookPivot;