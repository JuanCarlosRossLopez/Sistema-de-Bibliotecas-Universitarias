// src/controllers/rolController.js
const rolService = require('../service/rolService');

exports.createRol = async (req, res) => {
    try {
        const rol = await rolService.createRol(req.body);
        res.status(201).json(rol);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllRols = async (req, res) => {
    try {
        const rols = await rolService.findRols();
        res.status(200).json(rols);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getRolById = async (req, res) => {
    try {
        const rol = await rolService.findRolById(req.params.id);
        if (rol) {
            res.status(200).json(rol);
        } else {
            res.status(404).json({ error: 'Rol no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateRol = async (req, res) => {
    try {
        const updatedRol = await rolService.updateRol(req.body, req.params.id);
        if (updatedRol) {
            res.status(200).json(updatedRol);
        } else {
            res.status(404).json({ error: 'Rol no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteRol = async (req, res) => {
    try {
        const deleted = await rolService.deleteRol(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Rol eliminado correctamente' });
        } else {
            res.status(404).json({ error: 'Rol no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
