const categoryBooks = require('../models/CategoryBook');

const findCategory= async ()=>{
    try{
        return await categoryBooks.findAll();
    }catch(error){
        console.error("Error en repository all",error)
        throw error;
    }
};

const findCategoryById= async (id)=>{
try{
    return await categoryBooks.findByPk(id)

}catch(error){
    console.error("Error al encontrar")
    throw error
};
}

const createCategoryBook = async(body)=>{
try{
    return await categoryBooks.create(body)
}catch(error){
    console.error("error al crear la categoria")
    throw error
}}

const updateCategoryBook = async(body,id)=>{
    try{
        return await categoryBooks.update(body,{
            where:{
                id_category:id
            }
        })
    }catch(error){
        console.error("Error al actualizar en el service")
        throw error
    }
}

const deleteCategoryBook = async(id) =>{
    try{
        return await categoryBooks.destroy({
            where:{
                id_category:id
            }
        })
    }catch(error){
console.error("Error en eliminar en service",error)
throw error
    }
}


module.exports={
    findCategory,
    findCategoryById,
    createCategoryBook,
    updateCategoryBook,
    deleteCategoryBook
}
