const Rol = require('../models/Rol');

const findRols = async () => {
    try {
        return await Rol.findAll();
    } catch (error) {
        console.error("Error al encontrar los roles", error);
        throw error;
    }
};

const findRolById = async (id) => {
    try {
        return await Rol.findByPk(id);
    } catch (error) {
        console.error("Error al encontrar el rol", error);
        throw error;
    }
};

const createRol = async (body) => {
    try {
        return await Rol.create(body);
    } catch (error) {
        console.error("Error al crear el rol", error);
        throw error;
    }
};

const updateRol = async (body, id) => {
    try {
        return await Rol.update(body, {
            where: { id_rol: id }
        });
    } catch (error) {
        console.error("Error al actualizar el rol", error);
        throw error;
    }
};

const deleteRol = async (id) => {
    try {
        return await Rol.destroy({
            where: { id_rol: id }
        });
    } catch (error) {
        console.error("Error al eliminar el rol", error);
        throw error;
    }
};

module.exports = {
    findRols,
    findRolById,
    createRol,
    updateRol,
    deleteRol
};
