const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const Books = require('../models/Book');
const CategoryBooks = require('../models/CategoryBook')

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