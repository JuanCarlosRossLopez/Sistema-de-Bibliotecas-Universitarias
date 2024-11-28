import React, { useState, useEffect } from "react";
import NavbarEJ from "../../components/navbarEj";
import SidebarEJ from "../../components/sidebarEj";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import { useForm } from 'react-hook-form';
import { FaUserCircle } from "react-icons/fa";


export default function TablaEstudiantes() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const MySwal = withReactContent(Swal);
    const [students, setStudents] = useState([]);
    const [user, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // Para la búsqueda
    const [currentPage, setCurrentPage] = useState(1); // Página actual
    const [itemsPerPage] = useState(5); // Número de elementos por página

    useEffect(() => {
        fetchStudents();
        fetchUser();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await axios.get("http://localhost:3000/students");
            setStudents(response.data);
        } catch (error) {
            console.error("Error fetching users:", error.response?.data || error.message);
            Swal.fire('Error', 'No se cargaron los estudiantes', 'error');
        }
    };

    const fetchUser = async () => {
        try {
            const response = await axios.get("http://localhost:3000/users");
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users: ", error.response?.data || error.message);
            Swal.fire('Error', 'No se pudieron cargar los datos', 'error');
        }
    };

    // Filtrado
    const filteredStudents = students.filter((student) => {
        const searchTerm = searchQuery.toLowerCase();
        return (
            student.User?.name?.toLowerCase().includes(searchTerm) ||
            student.User?.mail?.toLowerCase().includes(searchTerm) ||
            student.tuition?.toLowerCase().includes(searchTerm)
        );
    });
    // Paginación
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentStudents = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    // Modal Crear y Actualizar
    const showModal = (student = null) => {
        reset(student || {
            tuition: "",
            book_rent: "",
            debt: "",

        });

        Swal.fire({
            title: student ? "Editar Estudiante" : "Crear Estudiante",
            html: `
                <input id="tuition" type="text" placeholder="Matrícula" class="swal2-input" value="${student?.tuition || ""}">
                <input id="book_rent" type="number" placeholder="Libros Rentados" class="swal2-input" value="${student?.book_rent || ""}">
                <input id="debt" type="number" placeholder="Deuda" step="0.01" class="swal2-input" value="${student?.debt || ""}">
                <select id="id_user_id" class="swal2-input">
                    ${user
                    .map((users) => `<option value="${users.id_users}" ${student?.id_user_id === users.id_users ? "selected" : ""}>${users.name}</option>`)
                    .join("")}
                </select>
            `,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: student ? "Actualizar" : "Crear",
            preConfirm: () => {
                // Obtenemos los valores del modal
                const tuition = document.getElementById("tuition").value.trim();
                const book_rent = document.getElementById("book_rent").value.trim();
                const debt = document.getElementById("debt").value.trim();
                const id_user_id = parseInt(document.getElementById("id_user_id").value);

                return {
                    tuition,
                    book_rent,
                    debt,
                    id_user_id,
                };
            },
        }).then(async (result) => {
            if (result.isConfirmed) {
                const studentData = result.value;
                console.log("Datos a enviar:", studentData);
                try {
                    if (student) {
                        // Editar estudiante
                        await axios.put(`http://localhost:3000/students/${student.id_student}`, studentData);
                        Swal.fire("Éxito", "Estudiante actualizado correctamente", "success");
                    } else {
                        // Crear estudiante
                        await axios.post("http://localhost:3000/students", studentData);
                        Swal.fire("Éxito", "Estudiante creado correctamente", "success");
                    }

                    fetchStudents(); // Recargamos la lista de estudiantes
                    Swal.fire('Exitoso', 'Los datos fueron creados exitosamente', "success");
                } catch (error) {
                    console.error(error);
                    Swal.fire("Error", "No se pudo guardar el estudiante", "error");
                }
            }
        });
    };


    const deleteStudent = async (StudentId) => {
        const { isConfirmed } = await Swal.fire({
            title: "¿Estás seguro?",
            text: "No podrás revertir esto",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminarla",
            cancelButtonText: "Cancelar",
        });

        if (isConfirmed) {
            try {
                await axios.delete(`http://localhost:3000/students/${StudentId}`);
                fetchStudents();
                Swal.fire("Eliminado", "El Estudiante ha sido eliminada", "success");
            } catch (error) {
                console.error("Error deleting category:", error.response?.data || error.message);
                Swal.fire("Error", "No se pudo eliminar el estudiante", "error");
            }
        }
    };

    return (
        <div className="bg-[#FFEFE5] min-h-screen w-full">
            <NavbarEJ />
            <div className="fixed top-0">
                <SidebarEJ />
            </div>
            <div className="flex justify-center h-full p-4">
                <div className="bg-[#E0C5BC] p-4 md:p-8 rounded-md max-h-max w-full sm:w-11/12 md:w-3/4 lg:w-4/5 xl:w-4/5 mt-32 sm:mt-24 md:mt-20">
                    <div className="flex flex-col items-center justify-between pb-6">
                        <div className="text-center md:text-left">
                            <h2 className="text-gray-600 font-semibold text-base md:text-xl">Gestión de Estudiantes</h2>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-4 md:gap-2 md:pt-3 items-center mt-4 md:mt-0 space-y-2 md:space-y-0">
                            <div className="flex bg-gray-50 items-center p-2 rounded-md w-full md:w-auto">
                                <input
                                    className="bg-transparent outline-none ml-1 block w-full md:w-auto"
                                    type="text"
                                    placeholder="Buscar..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <button onClick={() => showModal()} className="bg-[#A2726A] hover:bg-[#e8a599] px-3 md:px-4 py-2 rounded-md text-white font-semibold">
                                Crear Estudiante
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="w-full rounded-lg overflow-visible">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th className="px-3 md:px-5 py-3 border-b-2 text-left text-xs font-semibold text-gray-600 uppercase">Nombre</th>
                                        <th className="px-3 md:px-5 py-3 border-b-2 text-left text-xs font-semibold text-gray-600 uppercase">Correo</th>
                                        <th className="px-3 md:px-5 py-3 border-b-2 text-left text-xs font-semibold text-gray-600 uppercase">Matrícula</th>
                                        <th className="px-3 md:px-5 py-3 border-b-2 text-left text-xs font-semibold text-gray-600 uppercase">Libro rentado</th>
                                        <th className="px-3 md:px-5 py-3 border-b-2 text-left text-xs font-semibold text-gray-600 uppercase">Deuda</th>
                                        <th className="px-3 md:px-5 py-3 border-b-2 text-center text-xs font-semibold text-gray-600 uppercase">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentStudents.map((student) => (
                                        <tr key={student.id_student} className="border-b-2">
                                            <td className="px-3 md:px-5 py-5 text-sm">
                                                <div className="flex items-center">
                                                    <FaUserCircle className="w-10 h-10 text-gray-500" />
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-nowrap">{student.User?.name || "N/A"}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-3 md:px-5 py-5 text-sm">{student.User?.mail || "N/A"}</td>
                                            <td className="px-3 md:px-5 py-5 text-sm">{student.tuition}</td>
                                            <td className="px-3 md:px-5 py-5 text-sm">{student.book_rent}</td>
                                            <td className="px-3 md:px-5 py-5 text-sm">{student.debt}</td>
                                            <td className="px-3 md:px-5 py-5 text-sm">
                                                <button onClick={() => showModal(student)} className="px-3 py-1 font-semibold text-yellow-500">
                                                    <FaEdit size={24} />
                                                </button>
                                                <button onClick={() => deleteStudent(student.id_student)} className="px-3 py-1 font-semibold text-red-500">
                                                    <FaTrash size={24} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="px-3 md:px-5 py-5 bg-transparent flex flex-col xs:flex-row items-center xs:justify-between">
                                <span className="text-xs xs:text-sm text-gray-900">
                                    Mostrando {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredStudents.length)} de {filteredStudents.length} Estudiantes
                                </span>
                                <div className="inline-flex mt-2 xs:mt-0">
                                    <button
                                        className="text-sm text-indigo-50 bg-[#A2726A] hover:bg-[#e8a599] font-semibold py-2 px-4 rounded-l"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        Anterior
                                    </button>
                                    <button
                                        className="text-sm text-indigo-50 bg-[#A2726A] hover:bg-[#e8a599] font-semibold py-2 px-4 rounded-r"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        Siguiente
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}