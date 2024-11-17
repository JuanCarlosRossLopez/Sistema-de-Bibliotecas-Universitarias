const {DataTypes} = require('sequelize');
const sequelize= require('../config/db');

const TypeOfBook = sequelize.define('TypeOfBook',{
    id_type :{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    type_of_book:{
        type:DataTypes.STRING(100),
        allowNull:false
    }
},{
    tableName:'typeofbook',
    timestamps:false
})


module.exports= TypeOfBook