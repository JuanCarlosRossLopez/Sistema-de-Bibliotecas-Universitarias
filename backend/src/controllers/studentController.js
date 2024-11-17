// src/controllers/studentController.js
const studentService = require('../service/studentService')
exports.createStudent = async (req, res) => {
    try {
        const student = await studentService.createStudent(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllStudents = async (req, res) => {
    try {
        const students = await studentService.findStudents();
        res.status(200).json(students);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getStudentById = async (req, res) => {
    try {
        const student = await studentService.findStudentById(req.params.id);
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ error: 'Estudiante no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const updatedStudent = await studentService.updateStudent(req.body, req.params.id);
        if (updatedStudent) {
            res.status(200).json(updatedStudent);
        } else {
            res.status(404).json({ error: 'Estudiante no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const deleted = await studentService.deleteStudent(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Estudiante eliminado correctamente' });
        } else {
            res.status(404).json({ error: 'Estudiante no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
