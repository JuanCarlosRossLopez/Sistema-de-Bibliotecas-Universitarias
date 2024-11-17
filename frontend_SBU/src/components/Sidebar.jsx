import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible, AiOutlineArrowLeft } from "react-icons/ai";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true); // Cambia el estado aquí para simular "online" y "offline"

  return (
    <div className={`flex`}>
      {/* este es el boton de hamburguesa para abrir/cerrar el sidebar en pantallas móviles como dijo el yomi */}
      <button
        className="block md:hidden p-4 text-white bg-[#A2726A] rounded-br-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#A2726A] p-5 space-y-6 text-white transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <Link to="/perfil" className="flex items-center space-x-4 mb-12 mt-2">
          <img
            src="/img/perfilPrueba.jpeg"
            alt="Perfil"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="text-base font-semibold">Nombre del Usuario</p>
            <div className="flex items-center space-x-2">
              <span
                className={`h-3 w-3 rounded-full ${
                  isOnline ? "bg-green-500" : "bg-gray-400"
                }`}
              ></span>
              <span>{isOnline ? "En línea" : "Fuera de línea"}</span>
            </div>
          </div>
        </Link>

        <div className="mt-4 flex flex-col gap-5">
          <a className="text-2xl font-bold" href="/homee">Inicio</a>
          <a className="text-2xl font-bold" href="/TablaEmpleados">Libros registrados</a>
        </div>
      </div>

      
    </div>
  );
}

export default Sidebar;
