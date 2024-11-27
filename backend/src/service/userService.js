// src/services/userService.js
const userRepository = require('../repositories/userRepository');
const rolRepository = require('../repositories/rolRepository');
const bcrypt = require('bcryptjs'); // Asegúrate de importar bcrypt

const findUsers = async () => {
    const users = await userRepository.findUsers();
    if (!users) {
        throw new Error("No se encontraron usuarios");
    }
    return users;
};

const findUserById = async (id) => {
    const user = await userRepository.findUserById(id);
    if (!user) {
        throw new Error("No se encontró el usuario");
    }
    return user;
};

const createUser = async (body) => {
    const rol = await rolRepository.findRolById(body.id_rol_id);
    if (!rol) {
        throw new Error("El rol especificado no existe");
    }
    if (body.is_student && rol.name_rol !== 'student') {
        throw new Error('El rol debe ser "student" si el usuario es un estudiante');
    } else if (!body.is_student && rol.name_rol === 'student') {
        throw new Error('El rol de "student" solo se puede asignar si is_student es true');
    }

    // Hashear la contraseña antes de crear el usuario
    body.password = bcrypt.hashSync(body.password, 8);

    const user = await userRepository.createUser(body);
    if (!user) {
        throw new Error("No se creó el usuario");
    }
    return user;
};



const updateUser = async (body, id) => {
    const rol = await rolRepository.findRolById(body.id_rol_id);
    if (!rol) {
        throw new Error("El rol especificado no existe");
    }
    if (body.is_student && rol.name_rol !== 'Estudiante') {
        throw new Error('El rol debe ser "Estudiante" si el usuario es un estudiante');
    } else if (!body.is_student && rol.name_rol === 'Estudiante') {
        throw new Error('El rol de "Estudiante" solo se puede asignar si is_student es true');
    }
    const user = await userRepository.updateUser(body, id);
    if (!user) {
        throw new Error("No se actualizó el usuario");
    }
    return user;
};

const deleteUser = async (id) => {
    const user = await userRepository.deleteUser(id);
    if (!user) {
        throw new Error("No se eliminó el usuario");
    }
    return user;
};

const isBookRentedByUser = async (userId, bookId) => {
    try {
        return await userRepository.isBookRentedByUser(userId, bookId);
    } catch (error) {
        console.error("Error en service all", error);
        throw error;
    }
}

const getBookRentByUserId = async (userId) => {
    try {
        return await userRepository.getBookRentByUserId(userId);
    } catch (error) {
        console.error("Error en service all", error);
        throw error;
    }
}

module.exports = {
    findUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser,
    isBookRentedByUser,
    getBookRentByUserId
};
