import React, { useState, useEffect } from "react";
import NavbarEJ from "../../components/navbarEj";
import SidebarEJ from "../../components/sidebarEj";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import {useForm} from "react-hook-form";

export default function TablaUsuarios() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const MySwal = withReactContent(Swal);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:3000/users");
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const showModal = async (user = null) => {
        const isEdit = user !== null;
        const defaultValues = {
            name: isEdit ? user.name : '',
            last_name: isEdit ? user.last_name : '',
            email: isEdit ? user.mail : '',
            nomine: isEdit ? user.nomine : '',
            password: isEdit ? user.password : '',
            is_student: isEdit ? user.is_student : false,
            rol: isEdit ? user.Rol.name_rol : ''
        };

        const { value: formValues } = await MySwal.fire({
            title: isEdit ? "Editar Usuario" : "Crear Usuario",
            html: (
                <form id="form">
                    <input type="text" name="name" id="name" className="swal2-input" placeholder="Nombre" defaultValue={defaultValues.name} {...register("name", { required: true })} />
                    {errors.name && <span>Este campo es requerido</span>}
                    <input type="text" id="last_name" className="swal2-input" placeholder="Apellido" defaultValue={defaultValues.last_name} {...register("last_name", { required: true })} />
                    {errors.last_name && <span>Este campo es requerido</span>}
                    <input type="email" id="email" className="swal2-input" placeholder="Correo" defaultValue={defaultValues.email} {...register("email", { required: true })} />
                    {errors.email && <span>Este campo es requerido</span>}
                    <input type="text" id="nomine" className="swal2-input" placeholder="Nomine" defaultValue={defaultValues.nomine} {...register("nomine")} />
                    <input type="text" id="password" className="swal2-input" placeholder="Contraseña" defaultValue={defaultValues.password} {...register("password")} />
                    <label className="swal2-input-label">Es Estudiante</label>
                    <input type="checkbox" id="is_student" className="swal2-checkbox" defaultChecked={defaultValues.is_student} {...register("is_student")} />
                    <select id="rol" className="swal2-input" defaultValue={defaultValues.rol} {...register("rol", { required: true })}>
                        <option value="">Selecciona un rol:</option>
                        <option value="3">Estudiante</option>
                        <option value="2">Empleado</option>
                        <option value="1">Admin</option>
                    </select>
                    {errors.rol && <span>Este campo es requerido</span>}
                </form>
            ),
            showCancelButton: true,
            cancelButtonColor: "#d33",
            confirmButtonColor: "#3085d6",
            focusConfirm: false,
            preConfirm: () => {
                const form = document.getElementById("form");
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());
                if (!data.name || !data.last_name || !data.email || !data.rol) {
                    Swal.showValidationMessage("Todos los campos son requeridos");
                    return false;
                }
                return data;
            }
        });

        if (formValues) {
            if (isEdit) {
                await updateUser(user.id_users, formValues);
            } else {
                await onSubmit(formValues);
            }
        }
    };


    const onSubmit = async (userData) => {
        try {
            await axios.post("http://localhost:3000/users", userData);
            if( response.status===200){
                Swal.fire('Éxito', 'Usuario creado', 'success');
            }
        } catch (error) {
            console.error("Error creating user:", error);
            Swal.fire('Error', 'No se pudo crear el usuario', 'error');
        }
    };

    const updateUser = async (userId, userData) => {
        try {
            await axios.put(`http://localhost:3000/users/${userId}`, userData);
        } catch (error) {
            console.error("Error updating user:", error);
            Swal.fire('Error', 'No se pudo actualizar el usuario', 'error');
        }
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
                console.error("Error deleting user:", error);
                Swal.fire('Error', 'No se pudo eliminar el usuario', 'error');
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
                                <input className="bg-transparent outline-none ml-1 block w-full md:w-auto" type="text" placeholder="Search..." />
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
