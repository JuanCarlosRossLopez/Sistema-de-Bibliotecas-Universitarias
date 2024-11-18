const Student = require('../models/Student');
const User = require('../models/User');

const findStudents = async () => {
    try {
        return await Student.findAll({
            include: {
                model: User,
                attributes: ['name', 'last_name', 'mail', 'nomine']
            },
            attributes: { exclude: ['id_user_id'] }
        });
    } catch (error) {
        console.error("Error al encontrar los estudiantes", error);
        throw error;
    }
};

const findStudentById = async (id) => {
    try {
        return await Student.findByPk(id, {
            include: {
                model: User,
                attributes: ['name', 'last_name', 'mail', 'nomine']
            },
            attributes: { exclude: ['id_user_id'] }
        });
    } catch (error) {
        console.error("Error al encontrar el estudiante", error);
        throw error;
    }
};

const createStudent = async (body) => {
    try {
        return await Student.create(body);
    } catch (error) {
        console.error("Error al crear el estudiante", error);
        throw error;
    }
};

const updateStudent = async (body, id) => {
    try {
        return await Student.update(body, {
            where: { id_student: id }
        });
    } catch (error) {
        console.error("Error al actualizar el estudiante", error);
        throw error;
    }
};

const deleteStudent = async (id) => {
    try {
        return await Student.destroy({
            where: { id_student: id }
        });
    } catch (error) {
        console.error("Error al eliminar el estudiante", error);
        throw error;
    }
};

module.exports = {
    findStudents,
    findStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};
