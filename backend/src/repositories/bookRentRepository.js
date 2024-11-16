const BookRent = require('../models/BookRent');


const getBookRent=async()=>{
   try{ return await BookRent.findAll({
        include: [{
            model: Status,
            attributes: ['status']
        },
        {
            model: Student,
            attributes: ['name_student']
        },
        {
            model: Book,
            attributes: ['name_book']
        }]

    });
}catch(error){
    console.error("Error en repository all", error);
    throw error;    
}
};

const getBookRentById=async(id)=>{
    try{ return await BookRent.findByPk({
            where:{
                id_rent:id
            },
         include: [{
             model: Status,
             attributes: ['status']
         },
         {
             model: Student,
             attributes: ['name_student']
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
                    attributes: ['name_student']
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

module.exports={
    getBookRent,
    getBookRentById,
    getBookRentByStatusId,
    createBookRent,
    updateBookRent,
    deleteBookRent
};