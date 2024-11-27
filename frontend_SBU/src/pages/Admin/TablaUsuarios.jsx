import React, { useState, useEffect } from "react";
import {useForm} from 'react-hook-form';
import NavbarEJ from "../../components/navbarEj";
import SidebarEJ from "../../components/sidebarEj";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

export default function TablaUsuarios() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const MySwal = withReactContent(Swal);
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    useEffect(() => {
        fetchUsers()
        fetchRoles();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:3000/users");
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error.response?.data || error.message);
            Swal.fire('Error', 'No se pudieron cargar los usuarios', 'error');
        }
    };

    const fetchRoles = async () => {
        try {
            const response = await axios.get("http://localhost:3000/rols");
            setRoles(response.data);
        } catch (error) {
            console.error("Error fetching roles:", error.response?.data || error.message);
            Swal.fire('Error', 'No se pudieron cargar los roles', 'error');
        }
    };

    const onSubmit = async (data) => {
        try {
            if (data.id) {
                // Editar usuario
                await axios.put(`http://localhost:3000/users/${data.id}`, data);
                Swal.fire("Éxito", "Usuario actualizado correctamente", "success");
            } else {
                // Crear usuario
                await axios.post("http://localhost:3000/users", data);
                Swal.fire("Éxito", "Usuario creado correctamente", "success");
            }
            fetchUsers();
            reset(); // Limpia el formulario
        } catch (error) {
            console.error(error);
            Swal.fire("Error", "No se pudo guardar el usuario", "error");
        }
    };

    const showModal = (user = null) => {
        reset(user || {
            name: "",
            last_name: "",
            mail: "",
            password: "",
            nomine: "",
            is_student: false,
            id_rol_id: roles[0]?.id_rol || null,
        });

        Swal.fire({
            title: user ? "Editar Usuario" : "Crear Usuario",
            html: `
                <input id="name" placeholder="Nombre" class="swal2-input" value="${user?.name || ""}">
                <input id="last_name" placeholder="Apellido" class="swal2-input" value="${user?.last_name || ""}">
                <input id="mail" type="email" placeholder="Correo" class="swal2-input" value="${user?.mail || ""}">
                ${!user ? '<input id="password" type="password" placeholder="Contraseña" class="swal2-input">' : ""}
                <input id="nomine" placeholder="Nomine" class="swal2-input" value="${user?.nomine || ""}">
                <label class="swal2-input-label">Es Estudiante</label>
                <input id="is_student" type="checkbox" class="swal2-checkbox" ${user?.is_student ? "checked" : ""}>
                <select id="id_rol_id" class="swal2-input">
                    ${roles
                        .map(role => `<option value="${role.id_rol}" ${user?.id_rol_id === role.id_rol ? "selected" : ""}>${role.name_rol}</option>`)
                        .join("")}
                </select>
            `,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            preConfirm: () => {
                // Capturar los datos de los campos
                const name = document.getElementById("name").value.trim();
                const last_name = document.getElementById("last_name").value.trim();
                const mail = document.getElementById("mail").value.trim();
                const password = !user ? document.getElementById("password").value.trim() : null;
                const nomine = document.getElementById("nomine").value.trim();
                const is_student = document.getElementById("is_student").checked;
                const id_rol_id = parseInt(document.getElementById("id_rol_id").value, 10);
        
                // Validar manualmente los campos
                if (!name || !last_name || !mail || (!user && !password)) {
                    Swal.showValidationMessage("Por favor, complete todos los campos requeridos.");
                    return false;
                }
        
                // Retornar los valores al manejador de React Hook Form
                return { name, last_name, mail, password, nomine, is_student, id_rol_id };
            },
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    if (user) {
                        // Editar usuario
                        await axios.put(`http://localhost:3000/users/${user.id}`, result.value);
                        Swal.fire("Éxito", "Usuario actualizado correctamente", "success");
                    } else {
                        // Crear usuario
                        await axios.post("http://localhost:3000/users", result.value);
                        Swal.fire("Éxito", "Usuario creado correctamente", "success");
                    }
                    fetchUsers(); // Refrescar lista de usuarios
                } catch (error) {
                    console.error(error);
                    Swal.fire("Error", "No se pudo guardar el usuario", "error");
                }
            }
        });
        
    };


    

    
    const deleteUser = async (userId) => {
        const { isConfirmed } = await Swal.fire({
            title: "¿Estás seguro?",
            text: "No podrás revertir esto",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminarlo",
            cancelButtonText: "Cancelar",
        });

        if (isConfirmed) {
            try {
                await axios.delete(`http://localhost:3000/users/${userId}`);
                fetchUsers();
                Swal.fire('Eliminado', 'El usuario ha sido eliminado', 'success');
            } catch (error) {
                console.error("Error deleting user:", error.response?.data || error.message);
                Swal.fire('Error', error.response?.data.error || 'No se pudo eliminar el usuario', 'error');
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
                <div className="bg-[#E0C5BC] p-4 md:p-8 rounded-md max-h-[700px] w-full sm:w-11/12 md:w-3/4 lg:w-4/5 xl:w-4/5 mt-32 sm:mt-24 md:mt-28">
                    <div className="flex flex-col items-center justify-between pb-6">
                        <div className="text-center md:text-left">
                            <h2 className="text-gray-600 font-semibold text-base md:text-xl">Gestión de Usuarios</h2>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-4 md:gap-2 md:pt-3 md:flex-row items-center mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-4">
                            <div className="flex bg-gray-50 items-center p-2 rounded-md w-full md:w-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                                <input className="bg-transparent outline-none ml-1 block w-full md:w-auto" type="text" placeholder="Buscar..." />
                            </div>
                            <button className="bg-[#A2726A] hover:bg-[#e8a599] px-3 md:px-4 py-2 rounded-md text-white font-semibold">Filtrar por...</button>
                            <button onClick={() => showModal()} className="bg-[#A2726A] hover:bg-[#e8a599] px-3 md:px-4 py-2 rounded-md text-white font-semibold">Crear Usuario</button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="w-full rounded-lg overflow-visible">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th className="px-3 md:px-5 py-3 border-b-2 border-transparent bg-transparent text-left text-xs font-semibold text-gray-600 uppercase">Nombre</th>
                                        <th className="px-3 md:px-5 py-3 border-b-2 border-transparent bg-transparent text-left text-xs font-semibold text-gray-600 uppercase">Correo</th>
                                        <th className="px-3 md:px-5 py-3 border-b-2 border-transparent bg-transparent text-left text-xs font-semibold text-gray-600 uppercase">Rol</th>
                                        <th className="px-3 md:px-5 py-3 border-b-2 border-transparent bg-transparent text-center ml-10 text-xs font-semibold text-gray-600 uppercase">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id_users} className='border-b-2'>
                                            <td className="px-3 md:px-5 py-5 bg-transparent text-sm">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        <img className="w-full h-full object-cover rounded-full" src="/img/coronao.jpeg" alt="Foto_perfil" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-nowrap">{user.name}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-3 md:px-5 py-5 border-b border-transparent bg-transparent text-sm">
                                                <p className="text-gray-900 whitespace-nowrap">{user.mail}</p>
                                            </td>
                                            <td className="px-3 md:px-5 py-5 border-b border-transparent bg-transparent text-sm">
                                                <p className="text-gray-900 whitespace-nowrap">{user.Rol.name_rol}</p>
                                            </td>
                                            <td className="px-3 md:px-5 py-5 border-b border-transparent bg-transparent text-sm">
                                                <button onClick={() => showModal(user)} className="relative inline-block px-3 py-1 font-semibold text-yellow-500 hover:text-yellow-700 leading-tight">
                                                    <FaEdit size={24} />
                                                </button>
                                                <span onClick={() => deleteUser(user.id_users)} className="relative inline-block px-3 py-1 font-semibold text-red-500 hover:text-red-700 leading-tight">
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