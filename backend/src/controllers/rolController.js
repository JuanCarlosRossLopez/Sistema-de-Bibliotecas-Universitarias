const Rol = require('../models/Rol');

// Crear un nuevo rol
exports.createRol = async (req, res) => {
    try {
        const rol = await Rol.create(req.body);
        res.status(201).json(rol);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todos los roles
exports.getAllRols = async (req, res) => {
    try {
        const rols = await Rol.findAll();
        res.status(200).json(rols);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener un rol por ID
exports.getRolById = async (req, res) => {
    try {
        const rol = await Rol.findByPk(req.params.id);
        if (rol) {
            res.status(200).json(rol);
        } else {
            res.status(404).json({ error: 'Rol no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar un rol
exports.updateRol = async (req, res) => {
    try {
        const [updated] = await Rol.update(req.body, {
            where: { id_rol: req.params.id }
        });
        if (updated) {
            const updatedRol = await Rol.findByPk(req.params.id);
            res.status(200).json(updatedRol);
        } else {
            res.status(404).json({ error: 'Rol no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un rol
exports.deleteRol = async (req, res) => {
    try {
        const deleted = await Rol.destroy({
            where: { id_rol: req.params.id }
        });
        if (deleted) {
            res.status(200).json({ message: 'Rol eliminado correctamente' });
        } else {
            res.status(404).json({ error: 'Rol no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
