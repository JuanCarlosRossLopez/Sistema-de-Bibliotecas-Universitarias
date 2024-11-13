const {DataTypes}= require('sequelize');
const sequelize = require('../config/db')


const Status= sequelize.define('Status',{
    id_status:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false

    },
    desricption_status:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    tableName:'status',
    timestamps:false
})

module.exports=Status;