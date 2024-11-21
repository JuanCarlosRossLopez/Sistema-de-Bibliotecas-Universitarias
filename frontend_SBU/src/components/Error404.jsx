import React from 'react';
import { useNavigate } from 'react-router-dom';

function Error() {
    const navigate = useNavigate();

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen px-4"
            style={{ backgroundColor: '#FFEFE5' }}
        >
            <img
                src="/img/errorAnimation.gif"
                alt="Error Animation"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-6"
            />
            <h1 className="text-black text-2xl font-bold mb-4 text-center md:text-3xl">
                Hubo un error
            </h1>
            <p className="text-black text-lg mb-6 text-center md:text-xl">
                Puedes regresar a la pestaña anterior con este botón:
            </p>
            <button
                className="px-4 py-2 text-white bg-yellow-900 rounded-md hover:bg-yellow-800 text-sm md:text-base"
                onClick={() => navigate(-1)}
            >
                Regresar
            </button>
        </div>
    );
}

export default Error;
