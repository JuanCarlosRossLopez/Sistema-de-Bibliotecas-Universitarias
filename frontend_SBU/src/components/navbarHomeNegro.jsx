import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavbarHomeN() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <nav className="bg-transparent py-9 fixed top-0 left-0 w-full">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-12">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-start sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-start rounded-md p-2  text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Abrir menú</span>
              {menuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 6h18M3 12h18m-9 6h9"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="flex items-center">
            <img
              className="h-20 w-20"
              src="public/img/logoNegro.svg"
              alt="Logo"
            />
            <p className="font-serif text-base md:text-lg lg:text-xl xl:text-4xl text-black pl-3">
              Big Library
            </p>
          </div>

          <div className="hidden sm:flex space-x-6">
            <Link
              to="/CatalogoLibros"
              className="text-black lg:text-3xl md:text-xl sm:text-lg font-serif transition transform hover:scale-110"
            >
              Catálogo
            </Link>
            <div className="h-13 w-0.5 bg-slate-400"></div>
            <Link
              to="/Mislibros"
              className="text-black lg:text-3xl md:text-xl sm:text-lg font-serif transition transform hover:scale-110"
            >
              Mis libros
            </Link>
            <div className="h-13 w-0.5 bg-slate-400"></div>
            <Link
              to="/nosotros"
              className="text-black lg:text-3xl md:text-xl sm:text-lg font-serif transition transform hover:scale-110"
            >
              Acerca de
            </Link>
          </div>

          <div className="relative ml-3 flex flex-col items-center">
            <div>
              <Link
                to="/Mislibros"
                type="button"
                className="relative flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <div className="flex-shrink-0 w-10 h-10">
                  <FaRegUserCircle className="w-full h-full text-black rounded-full" />
                </div>
              </Link>
            </div>
            <button
              className="text-sm font-semibold  py-1 px-1 rounded-md"
              onClick={logout}
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden bg-white text-black " id="mobile-menu">
          <div className="space-y-2 px-4 pb-4 pt-2">
            <Link
              to="/CatalogoLibros"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-200"
            >
              Catálogo
            </Link>
            <div className="h-0.5 w-full bg-slate-400"></div>
            <Link
              to="/Mislibros"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-200"
            >
              Mis libros
            </Link>
            <div className="h-0.5 w-full bg-slate-400"></div>
            <Link
              to="/nosotros"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-200"
            >
              Acerca de
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavbarHomeN;