const studentRepository = require('../repositories/studentRepository');
const userRepository = require('../repositories/userRepository');

const findStudents = async () => {
    const students = await studentRepository.findStudents();
    if (!students) {
        throw new Error("No se encontraron estudiantes");
    }
    return students;
};

const findStudentById = async (id) => {
    const student = await studentRepository.findStudentById(id);
    if (!student) {
        throw new Error("No se encontró el estudiante");
    }
    return student;
};

const createStudent = async (body) => {
    const user = await userRepository.findUserById(body.id_user_id);
    if (!user.is_student) {
        throw new Error("El usuario debe ser un estudiante para ser asignado como estudiante");
    }
    const student = await studentRepository.createStudent(body);
    if (!student) {
        throw new Error("No se creó el estudiante");
    }
    return student;
};

const updateStudent = async (body, id) => {
    const user = await userRepository.findUserById(body.id_user_id);
    if (!user.is_student) {
        throw new Error("El usuario debe ser un estudiante para ser asignado como estudiante");
    }
    const student = await studentRepository.updateStudent(body, id);
    if (!student) {
        throw new Error("No se actualizó el estudiante");
    }
    return student;
};

const deleteStudent = async (id) => {
    const student = await studentRepository.deleteStudent(id);
    if (!student) {
        throw new Error("No se eliminó el estudiante");
    }
    return student;
};

module.exports = {
    findStudents,
    findStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};
