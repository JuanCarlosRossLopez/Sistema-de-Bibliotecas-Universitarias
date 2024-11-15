const Student = require('../repositories/studentRepository');

const findStudents = async(body) =>{
    const students= await Student.findStudents(body);
    if(!category){
    throw new Error("No se encontraron estudiantes")
    }
    return students
    }
    
    
    const findStudentById= async(id)=>{
        const student = await User.findStudentById(id)
        if(!category){
            throw new Error("No se enconmtro el estudiante")
        }
        return student
    }
    
    const createStudent=async(body)=>{
        console.info(body);
        const createstudent= await User.createStudent(body)
        if(!category){
            throw new Error("No se creó el estudiante")
        }
        return createstudent;
    }
    
    const updateStudent = async (body,id) =>{
        console.info(body,id)
        const updatestudent = await Student.updateStudent(body,id)
        if(!category){
            throw new Error("No se actualizó el estudiante")
        }
        return updatestudent
    }
    
    const deleteStudent = async (id) => {
        const deletestudent = await Student.deleteStudent(id);
        if (!result) {
            throw new Error("No se eliminó el estudiante");
        }
        return deletestudent;
    };
    
    module.exports={
        findStudents,
        findStudentById,
        createStudent,
        updateStudent,
        deleteStudent
    }