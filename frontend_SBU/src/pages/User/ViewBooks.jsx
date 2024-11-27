import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import NavbarHomeN from "../../components/navbarHomeNegro";


function VerLibros() {
    const [datos, setDatos] = useState([]);
    const [isBookRented, setIsBookRented] = useState(false);
    const [rentDate, setRentDate] = useState('');
    const student = JSON.parse(localStorage.getItem("user"));
    const studentId = student.id;
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetchDatos();
        isRented();
    }, []);

    const fetchDatos = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/book/${id}`);
            setDatos([response.data]);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const isRented = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/users/rentbyuser/${studentId}/books/${id}`
            );
            setIsBookRented(response.data.isRented);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleRentDateChange = (e) => {
        const rentDateValue = e.target.value;
        setRentDate(rentDateValue);

        const rentDateObj = new Date(rentDateValue);
        rentDateObj.setDate(rentDateObj.getDate() + 5);
        const deliveryDateValue = rentDateObj.toISOString().split('T')[0];

        document.getElementById('return_date').value = deliveryDateValue;
    };

    const today = new Date().toISOString().split('T')[0];

    const showModal = async () => {
        const { value } = await Swal.fire({
            title: "Rentar libro",
            html: `
                <input type="date" id="request_date" class="swal2-input" min="${today}" />
                <input type="hidden" id="id_book_id" value="${id}" />
                <input type="hidden" id="id_user_id" value="${studentId}" />
                <input type="date" id="return_date" class="swal2-input" readonly>
            `,
            focusConfirm: false,
            didOpen: () => {
                document.getElementById('request_date').addEventListener('change', handleRentDateChange);
            },
            preConfirm: () => {
                const request_date = document.getElementById('request_date').value;
                const return_date = document.getElementById('return_date').value;
                const id_book_id = document.getElementById('id_book_id').value;
                const id_user_id = document.getElementById('id_user_id').value;
                return { request_date, return_date, id_book_id, id_user_id, id_status_id: 1 };
            },
        });

        if (value) {
            try {
                const response = await axios.post(
                    "http://localhost:3000/bookRent/create",
                    value
                );
                if (response.status === 200) {
                    Swal.fire("Éxito", "Libro rentado correctamente", "success");
                }
            } catch (error) {
                console.error("Error:", error);
                Swal.fire("Error", "No se pudo rentar el libro", "error");
            }
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen" style={{ backgroundColor: "#FFEFE5" }}>
            <NavbarHomeN />
            <div className="flex flex-col md:flex-row items-center md:justify-center w-full gap-6 p-6 mt-24">
                {/* Card de la Imagen */}
                {datos.map((libro) => (
                    <React.Fragment key={libro.id_book}>
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                src={libro.image}
                                alt={`Imagen del libro ${libro.name_book}`}
                                className="rounded-lg max-h-80 object-contain w-4/5 md:w-full"
                            />
                        </div>

                        {/* Card de la Información */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center">
                            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
                                {libro.name_book}
                            </h1>
                            <h2 className="text-lg md:text-xl font-semibold mb-2">
                                Autor: {libro.author}
                            </h2>
                            <h2 className="text-lg md:text-xl font-semibold mb-2">
                                Categoria: {libro.categoria}
                            </h2>
                            <p className="text-base md:text-lg font-semibold mb-4">
                                Número de serie: {libro.number_serie}
                            </p>
                            <h1 className="text-xl md:text-2xl font-bold mt-2 mb-4">
                                Descripción:
                            </h1>
                            <p className="text-base md:text-lg">
                                {libro.description}
                            </p>
                            <div className="flex flex-row justify-center md:justify-start space-x-4 mt-6">
                                <button
                                    className="bg-green-500 text-white px-4 py-2 text-sm rounded shadow-md hover:bg-green-600 transition duration-200"
                                    onClick={() => alert("Leer funcionalidad en desarrollo.")}
                                >
                                    Leer
                                </button>
                                {!isBookRented && (
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 text-sm rounded shadow-md hover:bg-blue-600 transition duration-200"
                                        onClick={showModal}
                                    >
                                        Apartar
                                    </button>
                                )}
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>

            {/* Botón de Regresar */}
            <button
                    className="bg-yellow-800 text-white px-4 py-1 rounded shadow-md hover:bg-yellow-900 transition duration-200"
                    onClick={() => navigate(-1)}
            >
                Regresar
            </button>
        </div>
    );
}

export default VerLibros;
