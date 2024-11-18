// src/services/rolService.js
const rolRepository = require('../repositories/rolRepository');

const findRols = async () => {
    const rols = await rolRepository.findRols();
    if (!rols) {
        throw new Error("No se encontraron roles");
    }
    return rols;
};

const findRolById = async (id) => {
    const rol = await rolRepository.findRolById(id);
    if (!rol) {
        throw new Error("No se encontró el rol");
    }
    return rol;
};

const createRol = async (body) => {
    const rol = await rolRepository.createRol(body);
    if (!rol) {
        throw new Error("No se creó el rol");
    }
    return rol;
};

const updateRol = async (body, id) => {
    const rol = await rolRepository.updateRol(body, id);
    if (!rol) {
        throw new Error("No se actualizó el rol");
    }
    return rol;
};

const deleteRol = async (id) => {
    const rol = await rolRepository.deleteRol(id);
    if (!rol) {
        throw new Error("No se eliminó el rol");
    }
    return rol;
};

module.exports = {
    findRols,
    findRolById,
    createRol,
    updateRol,
    deleteRol
};
