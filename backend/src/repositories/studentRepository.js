const Student = require('../models/Student');

const findStudents = async (body)=>{
    try{
        return await Student.findAll(body);
    }catch(error){
        console.error("Error al emcontrar los estudiantes", error)
        throw error;
    }
};

const findStudentById = async (id)=>{
    try{
        return await Student.findByPk(id)
    }catch(error){
        console.error("Error al encontrar el estudiante")
        throw error
    }
};

const createStudent = async(body)=>{
    try{
        return await Student.create(body)
    }catch(error){
        console.error("Error al crear el estudiante")
        throw error
    }
};

const updateStudent = async (body, id) => {
    try{
        return await Student.update(body, {
            where: {
                id_student: id
            }
    });
    }catch (error) {
        console.error("Error al actualizar el estudiante", error);
        throw error
    }
};

const deleteStudent = async (id) => {
    try{
        return await Student.destroy({
            where: {
                id_student: id
            }
        });
    }catch (error){
        console.error("Error al eliminar el estudiante", error);
        throw error;
    }
};

module.exports={
    findStudents,
    findStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}