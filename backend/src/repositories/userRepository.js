const { where } = require('sequelize');
const User = require('../models/User');

const findUsers = async (body)=>{
    try{
        return await User.findAll(body);
    }catch(error){
        console.error("Error al emcontrar los usuarios", error)
        throw error;
    }
};

const findUserById = async (id)=>{
    try{
        return await User.findByPk(id)
    }catch(error){
        console.error("Error al encontrar el usuario")
        throw error
    }
};

const createUser = async(body)=>{
    try{
        return await User.create(body)
    }catch(error){
        console.error("Error al crear el usuario")
        throw error
    }
};

const updateUser = async (body, id) => {
    try{
        return await User.update(body, {
            where: {
                id_user: id
            }
    });
    }catch (error) {
        console.error("Error al actualizar el usuario", error);
        throw error
    }
};

const deleteUser = async (id) => {
    try{
        return await User.destroy({
            where: {
                id_user: id
            }
        });
    }catch (error){
        console.error("Error al eliminar el usuario", error);
        throw error;
    }
};

module.exports={
    findUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser
}