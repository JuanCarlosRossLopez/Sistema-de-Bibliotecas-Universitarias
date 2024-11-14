const {DataTypes} = require('sequelize');
const sequelize  = require('../config/db');
const Student = require('./Student')
const bookRent = sequelize.define('bookRent',{
    id_student_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: Student,
            key: 'id_students'
        }

    },
    id_book_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
                model:BookPivot,
                key:'id_book'
        }
    },
    request_date:{
        type:DataTypes.DATE,
        allowNull:false
    },
    return_date:{
        type:DataTypes.DATE,
        allowNull:false
    },
    id_status_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
                model:Status,
                key:'id_book'
        }
    },
},
{
    tableName:'book_rent',
    timestamps:false
})