const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const Books = require('./Book');


const BookPivot = sequelize.define('BookPivot',{
    id_book_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        references:{
            model:'Books',
            key:'id_book'
        }
    },
    id_category_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        references:{
            model:'CategoryBooks',
            key:'id_category'
        }
    }
},{
    tableName:'bookpivot',
    timestamps:false
});

module.exports=BookPivot;