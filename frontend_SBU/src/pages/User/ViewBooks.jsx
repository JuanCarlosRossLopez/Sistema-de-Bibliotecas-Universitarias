import NavbarHomeN from "../../components/navbarHomeNegro";
/*

*/


function Verlibros() {
    return (
        <div
            className="flex flex-col items-center min-h-screen"
            style={{ backgroundColor: '#FFEFE5' }}
        >
            <NavbarHomeN />
            <div
                className="flex flex-col md:flex-row items-center md:items-start justify-center w-fit p-1 md:gap-10 mt-40"
            >
                {/* Imagen del libro */}
                <div className="w-full md:w-2/5 md:p-4 flex justify-center">
                    <img
                        src="public/img/LibroPrueba.jpg"
                        alt="Imagen del libro"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>

                {/* Detalles del libro */}
                <div className="w-full md:w-1/2 md:p-10 flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">
                        AQUI VA EL TITULO :c
                    </h1>
                    <h2 className="text-lg md:text-xl font-semibold mb-2">
                        Disponible en:
                    </h2>
                    <em className="text-base md:text-lg font-semibold mb-4">
                        Digital, Físico
                    </em>
                    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-6">
                        <button className="bg-green-500 text-white px-6 py-2 rounded shadow-md hover:bg-green-600 transition duration-200">
                            Leer
                        </button>
                        <button className="bg-green-500 text-white px-6 py-2 rounded shadow-md hover:bg-green-600 transition duration-200">
                            Apartar
                        </button>
                    </div>
                    <h1 className="text-xl md:text-2xl font-bold mt-1">
                        Descripción:
                    </h1>
                    <p className="text-base md:text-lg mt-2">
                        Un capu paquete
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Verlibros;
