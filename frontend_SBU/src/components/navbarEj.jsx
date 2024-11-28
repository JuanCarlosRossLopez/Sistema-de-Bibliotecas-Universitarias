import { useEffect } from "react";
import abrirSidebar from "../js/abrirSidebar";
import { useAuth } from '../contexts/AuthContext';

const NavbarEJ = () => {
    const { user, logout } = useAuth();

    useEffect(() => {
        abrirSidebar();

        return () => {
            const btnSidebarToggler = document.getElementById("btnSidebarToggler");
            if (btnSidebarToggler) {
                btnSidebarToggler.replaceWith(btnSidebarToggler.cloneNode(true));
            }
        };
    }, []);

    return (
        <nav
            id="navbar"
            className="fixed top-0 z-40 flex w-full items-center bg-[#834841] px-4 text-white"
        >
            <button
                id="btnSidebarToggler"
                className="py-4 text-2xl hover:text-gray-200"
            >
                <svg
                    id="navClosed"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-8 w-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
                <svg
                    id="navOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="hidden h-8 w-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            <div className="flex-1 flex justify-start">
                <span className="font-bold ml-3 text-2xl md:text-4xl lg:text-3xl xl:text-4xl text-white">
                    Bienvenido, {user?.name || "Usuario"}
                </span>
            </div>
            <div className="flex-1 flex justify-end">
                <button onClick={logout}>
                    Cerrar Sesión
                </button>
            </div>
        </nav>
    );
};

export default NavbarEJ;