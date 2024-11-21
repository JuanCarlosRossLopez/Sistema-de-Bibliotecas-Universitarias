import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Rent() {
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
    
    return(
        <>
         <form onSubmit={handleSubmit(onSubmit)}>
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
            </form>
        
        </>
    )
}

export default Rent