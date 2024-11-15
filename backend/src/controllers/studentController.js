const Student = require('../models/Student');

// Crear un nuevo estudiante
exports.createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todos los estudiantes
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.status(200).json(students);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener un estudiante por ID
exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ error: 'Estudiante no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar un estudiante
exports.updateStudent = async (req, res) => {
    try {
        const [updated] = await Student.update(req.body, {
            where: { id_student: req.params.id }
        });
        if (updated) {
            const updatedstudent = await Student.findByPk(req.params.id);
            res.status(200).json(updatedstudent);
        } else {
            res.status(404).json({ error: 'Estudiante no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un estudiante
exports.deleteStudent = async (req, res) => {
    try {
        const deleted = await Student.destroy({
            where: { id_student: req.params.id }
        });
        if (deleted) {
            res.status(200).json({ message: 'Estudiante eliminado correctamente' });
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
