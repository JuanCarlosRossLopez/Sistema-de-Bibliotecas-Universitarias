import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Nosotros() {
    const location = useLocation();
    const navigate = useNavigate();

    // Lógica para redirigir dependiendo de la ruta actual
    React.useEffect(() => {
        if (location.pathname === "/CatalogoLibros") {
            // Si la ruta es /CatalogoLibros, no hacemos nada (te quedas en la misma página)
            return;
        } else if (location.pathname === "/Mislibros") {
            // Si la ruta es /Mislibros, rediriges a esa vista
            navigate("/Mislibros");
        }
    }, [location.pathname, navigate]);

    return (
        <div className="bg-[#FFEFE5] min-h-screen text-gray-600 px-4 py-8">
            {/* Título Principal */}
            <div className="text-center text-4xl md:text-5xl text-black font-bold mb-8">
                <h1>Acerca de Nosotros</h1>
            </div>

            {/* Descripción */}
            <div className="text-center text-base md:text-lg mb-12 px-2 sm:px-8 lg:px-20">
                <p>
                    The Big Library es una plataforma que facilita la gestión de libros de
                    una biblioteca universitaria,<br /> permitiendo el control de libros,
                    préstamos y devoluciones.<br /> Además, los estudiantes pueden hacer
                    reservaciones digitales y consultar la disponibilidad de recursos,<br />
                    mejorando la eficiencia y accesibilidad para todos los usuarios.
                </p>
            </div>

            {/* Misión, Visión y Valores */}
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {/* Misión */}
                <div className="bg-[#FFEFE5] text-black rounded-lg shadow-2xl p-4 sm:p-6 border-gray-300 border-2">
                    <h2 className="text-xl md:text-2xl font-bold mb-3 text-center">Misión</h2>
                    <p className="text-justify text-sm md:text-base">
                        Facilitar la gestión eficiente y accesible de los recursos
                        bibliográficos de las bibliotecas universitarias, ofreciendo
                        herramientas digitales que optimicen el control de libros,
                        préstamos, devoluciones y reservaciones para enriquecer la
                        experiencia de aprendizaje de los estudiantes y la comunidad
                        académica.
                    </p>
                </div>

                {/* Visión */}
                <div className="bg-[#FFEFE5] text-black rounded-lg shadow-2xl p-4 sm:p-6  border-gray-300 border-2">
                    <h2 className="text-xl md:text-2xl font-bold mb-3 text-center">Visión</h2>
                    <p className="text-justify text-sm md:text-base">
                        Ser la plataforma líder en la transformación digital de bibliotecas
                        universitarias, promoviendo la innovación y el acceso equitativo al
                        conocimiento mediante soluciones tecnológicas de vanguardia.
                    </p>
                </div>

                {/* Valores */}
                <div className="bg-[#FFEFE5] text-black rounded-lg shadow-2xl p-4 sm:p-6  border-gray-300 border-2">
                    <h2 className="text-xl md:text-2xl font-bold mb-3 text-center">Valores</h2>
                    <ul className="list-disc ml-4 text-justify text-sm md:text-base">
                        <li className="mb-2 ">Accesibilidad: Garantizamos que todos los usuarios puedan acceder fácilmente a los recursos de la biblioteca.</li>
                        <li className="mb-2">Innovación: Impulsamos la transformación digital en la gestión bibliotecaria.</li>
                        <li className="mb-2">Eficiencia: Optimizamos los procesos para simplificar y agilizar las operaciones.</li>
                        <li className="mb-2">Compromiso con la educación: Apoyamos el desarrollo académico mediante herramientas tecnológicas.</li>
                        <li>Colaboración: Fomentamos una conexión más efectiva entre la biblioteca y la comunidad universitaria.</li>
                    </ul>
                </div>
            </div>

            {/* Botón para regresar */}
            <div className="mt-8 text-center">
                <Link
                    to={location.pathname === "/CatalogoLibros" ? "/CatalogoLibros" : "/Mislibros"}
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-800 text-white font-semibold rounded-lg shadow-md hover:bg-[#FFEFE5] hover:text-black transition duration-300"
                >
                    Regresar
                </Link>
            </div>
        </div>
    );
}

export default Nosotros;