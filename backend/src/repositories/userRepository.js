const User = require('../models/User');
const Rol = require('../models/Rol');
const Student = require('../models/Student');

const findUsers = async () => {
    try {
        return await User.findAll({
            include: [
                { model: Rol, attributes: ['name_rol'] },
                { model: Student, attributes: ['id_student', 'tuition', 'book_rent', 'debt'] }
            ],
            attributes: { exclude: ['id_rol_id'] }
        });
    } catch (error) {
        console.error("Error al encontrar los usuarios", error);
        throw error;
    }
};

const findUserById = async (id) => {
    try {
        return await User.findByPk(id, {
            include: [
                { model: Rol, attributes: ['name_rol'] },
                { model: Student, attributes: ['id_student', 'tuition', 'book_rent', 'debt'] }
            ],
            attributes: { exclude: ['id_rol_id'] }
        });
    } catch (error) {
        console.error("Error al encontrar el usuario", error);
        throw error;
    }
};

const createUser = async (body) => {
    try {
        return await User.create(body);
    } catch (error) {
        console.error("Error al crear el usuario", error);
        throw error;
    }
};

const updateUser = async (body, id) => {
    try {
        return await User.update(body, {
            where: { id_user: id }
        });
    } catch (error) {
        console.error("Error al actualizar el usuario", error);
        throw error;
    }
};

const deleteUser = async (id) => {
    try {
        return await User.destroy({
            where: { id_user: id }
        });
    } catch (error) {
        console.error("Error al eliminar el usuario", error);
        throw error;
    }
};

module.exports = {
    findUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser
};
