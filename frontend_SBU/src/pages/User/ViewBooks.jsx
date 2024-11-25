import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';
import Swal from 'sweetalert2';
import NavbarHomeN from '../../components/navbarHomeNegro';


function VerLibros() {
    const [datos, setDatos] = useState([]);
    const [isBookRented, setIsBookRented] = useState(false);
    const student = JSON.parse(localStorage.getItem('user'));
    const studentId = student.id;
    console.log(studentId);
    const navigate = useNavigate(); // Añadido aquí

    useEffect(() => {
        fetchDatos();
        isRented();
    }, []);

    const { id } = useParams();
    

    const fetchDatos = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/book/${id}`);
            setDatos([response.data]);
        } catch (error) {
            console.error('Error:', error);
        }
    };



    const [rentDate, setRentDate] = useState("");

const isRented = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/users/rentbyuser/${studentId}/books/${id}`);
        setIsBookRented(response.data.isRented);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
};
    
    const handleRentDateChange = (e) => {
        const rentDateValue = e.target.value;
        setRentDate(rentDateValue);

        const rentDateObj = new Date(rentDateValue);
        rentDateObj.setDate(rentDateObj.getDate() + 5);
        const deliveryDateValue = rentDateObj.toISOString().split('T')[0];

        document.getElementById('deliveryDate').value = deliveryDateValue;
    };

    const today = new Date().toISOString().split('T')[0];


    const showModal = async () => {
        const { value } = await Swal.fire({
            title: 'Rentar libro',
            html: `
                <input type="date" id="request_date" class="swal2-input" value="${today}">
                <input type="date" id="return_date" class="swal2-input" readonly>
                <input type="hidden" id="id_book_id" value="${id}">
                <input type="hidden" id="id_user_id" value="${studentId}">
                <input type="hidden" id="id_status_id" value="1">
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
                return { request_date, return_date, id_book_id, id_user_id, id_status_id: 1};
            },
        });

        if (value) {
            onSubmit(value);
        }
    };
    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/bookRent/create', data);
            if (response.status === 200) {
                alert('Rent created');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    
    return (
<div className="flex flex-col items-center min-h-screen" style={{ backgroundColor: '#FFEFE5' }}>
    <NavbarHomeN />
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-fit p-1 md:gap-10 mt-40">
        {
            datos.map((libro) => (
                <div key={libro.id_book} className="w-full md:w-2/5 md:p-4">
                    <button
                        className="px-4 py-2 text-white bg-yellow-900 rounded-md hover:bg-yellow-800 mb-4"
                        onClick={() => navigate(-1)}>
                        Regresar
                    </button>
                    <div className="flex flex-col items-center md:items-start">
                        <img
                            src={libro.image}
                            alt={`Imagen del libro ${libro.name_book}`}
                            className="w-full h-auto rounded-lg shadow-md mb-4"
                        />
                        <div className="w-full md:w-3/4 flex flex-col">
                            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
                                {libro.name_book}
                            </h1>
                            <h2 className="text-lg md:text-xl font-semibold mb-2">
                                Autor: {libro.author}
                            </h2>
                            <em className="text-base md:text-lg font-semibold mb-4">
                                Número de serie: {libro.number_serie}
                            </em>
                            <div className="flex flex-row justify-center md:justify-start space-x-4 mb-6">
                                <button className="bg-green-500 text-white px-4 py-2 text-sm rounded shadow-md hover:bg-green-600 transition duration-200">
                                    Leer
                                </button>
                                {!isBookRented && (
                                <button className="bg-blue-500 text-white px-4 py-2 text-sm rounded shadow-md hover:bg-blue-600 transition duration-200" onClick={showModal}>
                                    Apartar
                                </button>
                                )}
                            </div>
                            <h1 className="text-xl md:text-2xl font-bold mt-1">
                                Descripción:
                            </h1>
                            <p className="text-base md:text-lg mt-2">
                                {libro.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
</div>

    );
}

export default VerLibros;
