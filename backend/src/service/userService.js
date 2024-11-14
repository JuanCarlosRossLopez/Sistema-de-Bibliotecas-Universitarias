const User = require('../repositories/userRepository');

const findUsers = async(body) =>{
    const users= await User.findUsers(body);
    if(!category){
    throw new Error("No se encontraron usuarios")
    }
    return users
    }
    
    
    const findUserById= async(id)=>{
        const user = await User.findUserById(id)
        if(!category){
            throw new Error("No se enconmtro el usuario")
        }
        return user
    }
    
    const createUser=async(body)=>{
        console.info(body);
        const createuser= await User.createUser(body)
        if(!category){
            throw new Error("No se creó el usuario")
        }
        return createUser;
    }
    
    const updateUser = async (body,id) =>{
        console.info(body,id)
        const updateuser = await User.updateUser(body,id)
        if(!category){
            throw new Error("No se actualizó el usuario")
        }
        return updateUser
    }
    
    const deleteUser = async (id) => {
        const deleteuser = await User.deleteUser(id);
        if (!result) {
            throw new Error("No se eliminó el usuario");
        }
        return deleteuser;
    };
    
    module.exports={
        findUsers,
        findUserById,
        createUser,
        updateUser,
        deleteUser
    }