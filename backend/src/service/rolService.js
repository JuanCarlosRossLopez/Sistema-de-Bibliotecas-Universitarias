const Rol = require('../repositories/rolRepository');

const findRols = async(body) =>{
    const rols= await Rol.findRols(body);
    if(!category){
    throw new Error("No se encontraron roles")
    }
    return rols
    }
    
    
    const findRolById = async(id)=>{
        const rol = await Rol.findRolById(id)
        if(!category){
            throw new Error("No se enconmtro el rol")
        }
        return rol
    }
    
    const createRol = async(body)=>{
        console.info(body);
        const createrol= await Rol.createRol(body)
        if(!category){
            throw new Error("No se creó el rol")
        }
        return createrol;
    }
    
    const updateRol = async (body,id) =>{
        console.info(body,id)
        const updaterol = await Rol.updateRol(body,id)
        if(!category){
            throw new Error("No se actualizó el rol")
        }
        return updaterol
    }
    
    const deleteRol = async (id) => {
        const deleterol = await Rol.deleteRol(id);
        if (!result) {
            throw new Error("No se eliminó el rol");
        }
        return deleterol;
    };
    
    module.exports={
        findRols,
        findRolById,
        createRol,
        updateRol,
        deleteRol
    }