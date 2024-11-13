const status= require('../models/Status');


const findStatus =async(body)=>{
    try{
        return await status.findAll(body)
    }catch(error){
        console.error("Erroe al encontrar ")
        throw error
    }
}

const findStatusById= async (id)=>{
    try{
        return await status.findByPk(id)
    }catch(error){
        console.error("Error al encontrar el id")
    }
};
const createStatus= async(body)=>{
    try{
        return await status.create(body)
    }catch(error){
        console.error("Error")
    }
};
const updateStatus = async (body, id) => {
    try {
        return await categoryBooks.update(body, {
            where: {
                id_status: id
            }
        });
    } catch (error) {
        console.error("Error al actualizar en el service", error);
        throw error;
    }
};

const deleteStatus = async (id) => {
    try {
        return await categoryBooks.destroy({
            where: {
                id_status: id
            }
        });
    } catch (error) {
        console.error("Error en eliminar en service", error);
        throw error;
    }
};

module.exports={
    findStatus,
    findStatusById,
    createStatus,
    updateStatus,
    deleteStatus
}