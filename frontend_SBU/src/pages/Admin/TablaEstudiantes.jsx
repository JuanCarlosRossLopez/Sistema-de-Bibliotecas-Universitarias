import React, { useState, useEffect } from "react";
import NavbarEJ from "../../components/navbarEj";
import SidebarEJ from "../../components/sidebarEj";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";


export default function TablaEstudiantes() {
    const MySwal = withReactContent(Swal);
    const [students, setStudents] = useState([]);
    const [user, setUsers] = useState([]);

    useEffect(() => {
        fetchStudents();
        fetchUser();
    }, []);

    const fetchStudents = async () => { 
        try{
            const response = await axios.get("http://localhost:3000/students");
            setStudents(response.data);
        } catch(error){
            console.error("Error fetching users:" , error.response?.data || error.message);
            Swal.fire('Error', 'No se cargaron los estudiantes', 'error');
        }
    };

    const fetchUser = async () => {
        try{
            const response = await axios.get("http://localhost:3000/users");
            setUsers(response.data);
        }catch (error) {
            console.error("Error fetching users: ", error.response?.data || error.message);
            Swal.fire('Error', 'No se pudieron cargar los datos', 'error');
        }
    };
    
    return (
        <div className="bg-[#FFEFE5] min-h-screen w-full">
            <NavbarEJ />
            <div className="fixed top-0">
                <SidebarEJ />
            </div>
            <div className="flex justify-center h-full p-4">
                <div className="bg-[#E0C5BC] p-4 md:p-8 rounded-md max-h-[700px] w-full sm:w-11/12 md:w-3/4 lg:w-4/5 xl:w-4/5 mt-32 sm:mt-24 md:mt-28">
                    <div className="flex flex-col items-center justify-between pb-6">
                        <div className="text-center md:text-left">
                            <h2 className="text-gray-600 font-semibold text-base md:text-xl">Gestión de Estudiantes</h2>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-4 md:gap-2 md:pt-3 md:flex-row items-center mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-4">
                            <div className="flex bg-gray-50 items-center p-2 rounded-md w-full md:w-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                                <input className="bg-transparent outline-none ml-1 block w-full md:w-auto" type="text" placeholder="Buscar..." />
                            </div>
                            <button className="bg-[#A2726A] hover:bg-[#e8a599] px-3 md:px-4 py-2 rounded-md text-white font-semibold">Filtrar por...</button>
                            <button  className="bg-[#A2726A] hover:bg-[#e8a599] px-3 md:px-4 py-2 rounded-md text-white font-semibold">Crear Estudiante</button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="w-full rounded-lg overflow-visible">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th className="px-3 md:px-5 py-3 border-b-2 border-transparent bg-transparent text-left text-xs font-semibold text-gray-600 uppercase">Nombre</th>
                                        <th className="px-3 md:px-5 py-3 border-b-2 border-transparent bg-transparent text-left text-xs font-semibold text-gray-600 uppercase">Correo</th>
                                        <th className="px-3 md:px-5 py-3 border-b-2 border-transparent bg-transparent text-left text-xs font-semibold text-gray-600 uppercase">Matrícula</th>
                                        <th className="px-3 md:px-5 py-3 border-b-2 border-transparent bg-transparent text-left text-xs font-semibold text-gray-600 uppercase">Libros rentado</th>
                                        <th className="px-3 md:px-5 py-3 border-b-2 border-transparent bg-transparent text-left text-xs font-semibold text-gray-600 uppercase">Deuda</th>
                                        <th className="px-3 md:px-5 py-3 border-b-2 border-transparent bg-transparent text-center ml-10 text-xs font-semibold text-gray-600 uppercase">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map((student) => (
                                        <tr key={student.id_student} className='border-b-2'>
                                            <td className="px-3 md:px-5 py-5 bg-transparent text-sm">
                                                <div className="flex items-center">
                                                <div className="flex-shrink-0 w-10 h-10">
  <FaUserCircle className="w-full h-full text-gray-500 rounded-full" />
</div>
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-nowrap">{student.User?.name || "N/A"}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-3 md:px-5 py-5 border-b border-transparent bg-transparent text-sm">
                                                <p className="text-gray-900 whitespace-nowrap">{student.User?.mail || "N/A"}</p>
                                            </td>
                                            <td className="px-3 md:px-5 py-5 border-b border-transparent bg-transparent text-sm">
                                                <p className="text-gray-900 whitespace-nowrap">{student.tuition}</p>
                                            </td>
                                            <td className="px-3 md:px-5 py-5 border-b border-transparent bg-transparent text-sm">
                                                <p className="text-gray-900 whitespace-nowrap">{student.book_rent}</p>
                                            </td>
                                            <td className="px-3 md:px-5 py-5 border-b border-transparent bg-transparent text-sm">
                                                <p className="text-gray-900 whitespace-nowrap">{student.debt}</p>
                                            </td>
                                            <td className="px-3 md:px-5 py-5 border-b border-transparent bg-transparent text-sm">
                                                <button className="relative inline-block px-3 py-1 font-semibold text-yellow-500 hover:text-yellow-700 leading-tight">
                                                    <FaEdit size={24} />
                                                </button>
                                                <span className="relative inline-block px-3 py-1 font-semibold text-red-500 hover:text-red-700 leading-tight">
                                                    <FaTrash size={24} />
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="px-3 md:px-5 py-5 bg-transparent flex flex-col xs:flex-row items-center xs:justify-between">
                                <span className="text-xs xs:text-sm text-gray-900">Mostrando 1 a 4 de 50 Entradas</span>
                                <div className="inline-flex mt-2 xs:mt-0">
                                    <button className="text-sm text-indigo-50 bg-[#A2726A] hover:bg-[#e8a599] font-semibold py-2 px-4 rounded-l">Prev</button>
                                    <button className="text-sm text-indigo-50 bg-[#A2726A] hover:bg-[#e8a599] font-semibold py-2 px-4 rounded-r">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}