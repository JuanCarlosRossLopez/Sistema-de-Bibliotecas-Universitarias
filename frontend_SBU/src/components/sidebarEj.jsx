import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const SidebarEJ = () => {
    const [isOnline, setIsOnline] = useState(true);
    const [userName, setUserName] = useState("");
    const [userRole, setUserRole] = useState("");

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setUserName(user.name);
            setUserRole(user.role);
        }
    }, []);

    return (
        <div id="containerSidebar" className="z-40">
            <div className="navbar-menu relative z-40">
                <nav
                    id="sidebar"
                    className="fixed left-0 top-0 bottom-0 flex w-3/5 -translate-x-full flex-col overflow-y-auto bg-[#A2726A] pt-6 pb-8 sm:max-w-xs lg:w-80 "
                >
                    <div className="px-4 pb-6">
                        <Link to={"/perfil"} className="flex items-center space-x-4 mb-3 mt-2" >
                            <FaUserCircle className="w-16 h-16 text-white" />
                            <div>
                                <p className="text-md text-white font-semibold">{userName}</p>
                                <div className="flex items-center text-white space-x-2">
                                    <span
                                        className={`h-3 w-3 rounded-full ${isOnline ? "bg-green-500" : "bg-gray-400"
                                            }`}
                                    ></span>
                                    <span>{isOnline ? "En línea" : "Fuera de línea"}</span>
                                </div>
                            </div>
                        </Link>
                        <h3 className="mb-2 text-lg font-medium uppercase text-white">
                            Principal
                        </h3>
                        <ul className="mb-8 text-sm font-medium">
                            {userRole === "employee" && (
                                <li>
                                    <Link
                                        className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-[#e8a599]"
                                        to={`/homee`}
                                    >
                                        <span className="select-none text-lg">
                                            Inicio Empleados
                                        </span>
                                    </Link>
                                </li>
                            )}
                            {userRole === "admin" && (
                                <>
                                    <li>
                                        <Link
                                            className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-[#e8a599]"
                                            to={`/HomeAdmin`}
                                        >
                                            <span className="select-none text-lg">Inicio Admin</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-[#e8a599]"
                                            to={`/TablaUsuarios`}
                                        >
                                            <span className="select-none text-lg">
                                                Tabla Usuarios
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-[#e8a599]"
                                            to={`/TablaEstudiantes`}
                                        >
                                            <span className="select-none text-lg">
                                                Tabla Estudiantes
                                            </span>
                                        </Link>
                                    </li>
                                </>
                            )}
                            {(userRole === "admin" || userRole === "employee") && (
                                <>
                                    <li>
                                        <Link
                                            className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-[#e8a599]"
                                            to={`/TablaLibros`}
                                        >
                                            <span className="select-none text-lg">Tabla Libros</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-[#e8a599]"
                                            to={`/GestionCategorias`}
                                        >
                                            <span className="select-none text-lg">
                                                Tabla Categorias de libros
                                            </span>
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default SidebarEJ;
