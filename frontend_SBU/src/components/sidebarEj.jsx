import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const SidebarEJ = () => {
    const [isOnline, setIsOnline] = useState(true);
    return (
        <div id="containerSidebar" className="z-40">
            <div className="navbar-menu relative z-40">
                <nav
                    id="sidebar"
                    className="fixed left-0 top-0 bottom-0 flex w-3/4 -translate-x-full flex-col overflow-y-auto bg-[#A2726A] pt-6 pb-8 sm:max-w-xs lg:w-80"
                >
                    <div className="px-4 pb-6">
                        <Link to="/perfil" className="flex items-center space-x-4 mb-3 mt-2">
                            <img
                                src="/img/coronao.jpeg"
                                alt="Perfil"
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-md text-white  font-semibold">Coronao Toño</p>
                                <div className="flex items-center text-white space-x-2">
                                    <span
                                        className={`h-3 w-3 rounded-full ${isOnline ? "bg-green-500" : "bg-gray-400"
                                            }`}
                                    ></span>
                                    <span>{isOnline ? "En línea" : "Fuera de línea"}</span>
                                </div>
                            </div>
                        </Link>
                        <h3 className="mb-2 text-lg font-medium uppercase text-white">Principal</h3>
                        <ul className="mb-8 text-sm font-medium">
                            <li>
                                <a
                                    className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-[#e8a599]"
                                    href={`/AdminEJ`}
                                >
                                    <span className="select-none text-lg">Inicio</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-[#e8a599]"
                                    href={`/TablaEmpleados`}
                                >
                                    <span className="select-none text-lg">Tabla Empleados</span>
                                </a>
                            </li>
                        </ul>
                    </div>


                </nav>
            </div>
        </div>
    );
};

export default SidebarEJ;
