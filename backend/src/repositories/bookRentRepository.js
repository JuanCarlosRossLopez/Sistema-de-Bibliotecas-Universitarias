const BookRent = require('../models/BookRent');
const Status = require('../models/Status');
const Student = require('../models/Student');
const Book = require('../models/Book');
const User = require('../models/User');
const {Op} = require('sequelize');

const getBookRent = async () => {
    try {
        return await BookRent.findAll({
            include: [
                {
                    model: Status,
                    attributes: ['status']
                },
            
                {
                    model: Book,
                    attributes: ['name_book']
                }
            ]
        });
    } catch (error) {
        console.error("Error en repository all", error);
        throw error;
    }
};

const getBookRentById=async(id)=>{
    try{ return await BookRent.findOne({
            where:{
                id_rent:id
            },
         include: [{
             model: Status,
             attributes: ['status']
         },
        
         {
             model: Book,
             attributes: ['name_book']
         }],
 
     });
 }catch(error){
     console.error("Error en repository all", error);
     throw error;    
 }
 }

 const getBookRentByStatusId = async (id) => {
    try {
        return await BookRent.findAll({
            where: { id_status_id: id },
            include: [
                {
                    model: Status,
                    attributes: ['status']
                },
                {
                    model: Student,
                    include: [
                        {
                            model: User,
                            attributes: ['name'] // Asegúrate de que este es el nombre del atributo en la tabla User
                        }
                    ]
                },
                {
                    model: Book,
                    attributes: ['name_book']
                }
            ]
        });
    } catch (error) {
        console.error("Error en repository all", error);
        throw error;
    }
};

const createBookRent=async(body)=>{
    try{
        return await BookRent.create(body);
    }catch(error){
        console.error("error al crear el libro");
        throw error;
    }
};

const updateBookRent=async(body,id)=>{
    try{
        return await BookRent.update(body,{
            where:{
                id_rent:id
            }
        });
    }catch(error){
        console.error("Error al actualizar en el service", error);
        throw error;
    }
};


const deleteBookRent=async(id)=>{
    try{
        return await BookRent.destroy({
            where:{
                id_rent:id
            }
        });
    }catch(error){
        console.error("Error al eliminar en el service", error);
        throw error;
    }
};

const getOverdueBookRents = async () => {
    try {
        const currentDate = new Date().toISOString(); // Fecha actual en formato ISO

        const overdueBookRents = await BookRent.findAll({
            where: {
                return_date: {
                    [Op.lt]: currentDate // Libros cuya fecha de devolución es menor a la actual
                },
            },
            include: [
                {
                    model: Book,
                    attributes: ['name_book']
                },
                {
                    model: Status,
                    attributes: ['status']
                },
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        });

        console.log("Consulta generada:", overdueBookRents);

        // Actualiza estado
        await BookRent.update(
            { id_status_id: 3 },
            {
                where: {
                    return_date: {
                        [Op.lt]: currentDate
                    }
                }
            }
        );

        return overdueBookRents;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};



module.exports={
    getBookRent,
    getBookRentById,
    getBookRentByStatusId,
    getOverdueBookRents,
    createBookRent,
    updateBookRent,
    deleteBookRent
};