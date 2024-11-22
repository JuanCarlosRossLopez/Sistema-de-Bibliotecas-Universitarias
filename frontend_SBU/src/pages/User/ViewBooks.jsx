import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import NavbarHomeN from '../../components/navbarHomeNegro';

function VerLibros() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        fetchDatos();
    }, []);

    const { id } = useParams();

    const fetchDatos = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/book/${id}`);
            setDatos([response.data]); 
            console.log([response.data]);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const { register, handleSubmit,formState:{
        errors,isDirty
    }} = useForm();
    console.log(errors);
    const [rentDate, setRentDate] = useState("");
    const onSubmit=async(data)=>{
        try{
            const response = await axios.post('http://localhost:3000/bookRent/create',data);
            if(response.status === 200){
                alert('Rent created');
            }
        }catch(error){
            console.error('Error:',error);
        }}

    const handleRentDateChange = (e) => {
        const rentDateValue = e.target.value;
        setRentDate(rentDateValue);

        const rentDateObj = new Date(rentDateValue);
        rentDateObj.setDate(rentDateObj.getDate() + 5);
        const deliveryDateValue = rentDateObj.toISOString().split('T')[0];

        document.getElementById('deliveryDate').value = deliveryDateValue;
    };

    const today = new Date().toISOString().split('T')[0];


const showModal= async ()=>{
    const {value } = await MySwal.fire({
        tittle:"Apartar libro",
        htmhl:` <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="studentId">el id del estudiante aqui</label>
                <input type="number" {...register("studentId")} />

                <label htmlFor="bookId">el id del libro aqui</label>
                <input type="number" {...register("bookId")} />

                <label htmlFor="rentDate">la fecha de renta aqui</label>
                <input type="date" id="rentDate" {...register("rentDate")} min={today} onChange={handleRentDateChange} />

                <label htmlFor="deliveryDate">la fecha de entrega aqui</label>
                <input type="date" id="deliveryDate" {...register("deliveryDate")} readOnly />

                <label htmlFor="statusId">el id del status aqui</label>
                <input type="number" {...register("statusId")} />

                <button type="submit">Submit</button>
            </form`
    })
}

    return (
        <div
            className="flex flex-col items-center min-h-screen"
            style={{ backgroundColor: '#FFEFE5' }}
        >
            <NavbarHomeN />
            <div
                className="flex flex-col md:flex-row items-center md:items-start justify-center w-fit p-1 md:gap-10 mt-40"
            >
                {
                    datos.map((libro) => (
                        <div key={libro.id_book} className="w-full md:w-2/5 md:p-4 flex justify-center">
                            <img
                                src={libro.image}
                                alt={`Imagen del libro ${libro.name_book}`}
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                            <div className="w-full md:w-1/2 md:p-10 flex flex-col">
                                <h1 className="text-2xl md:text-3xl font-bold mb-4">
                                    {libro.name_book}
                                </h1>
                                <h2 className="text-lg md:text-xl font-semibold mb-2">
                                    Autor: {libro.author}
                                </h2>
                                <em className="text-base md:text-lg font-semibold mb-4">
                                    Número de serie: {libro.number_serie}
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
                                    {libro.description}
                                </p>
                            </div>
                        </div>
                    ))
                 
                    
                }
            </div>
        </div>
    );
}

export default VerLibros;
