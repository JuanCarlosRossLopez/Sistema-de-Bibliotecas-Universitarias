const  statusRepo= require('../repositories/statusRepository');


const findStatus=async(body)=>{
    const status = await statusRepo.findStatus(body)
    if(!status){
        throw new Error("No se contro el status")
    }
    return status
}

const findStatusById=async(id)=>{
    const status = await statusRepo.findStatusById(id)
    if(!status){
        throw new Error("No se contro el id")
    }
    return status
}

const createStatus= async(body) =>{
    const status = await statusRepo.createStatus(body)
    if(!status){
        throw new Error("No se pudo crear")
    }
    return status
}

const updateStatus = async(body,id)=>{
    const status= await statusRepo.updateStatus(body,id)
    if(!status){
        throw new Error("asd");
        
    }
    return status
}

const deleteStatus= async(id)=>{
    const status = await statusRepo.deleteStatus(id)
    if(!status){
        throw new 
        Error("asd")
    }
    return status
}

module.exports={
    findStatus,
    findStatusById,
    createStatus,
    updateStatus,
    deleteStatus
}