import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarHomeN from "../../components/navbarHomeNegro";

function Myspace() {
  const [rentedBooks, setRentedBooks] = useState([]);
   const student = JSON.parse(localStorage.getItem("user"))
   const Student = student.id

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId"); 
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  useEffect(() => {
    
      axios
        .get(`http://localhost:3000/users/rentbyuser/${Student}`) 
        .then((response) => {
          setRentedBooks(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          console.error("Error fetching rented books:", error);
        });
    
  }, []);

  return (
    <div
      className="flex flex-col items-center min-h-screen"
      style={{ backgroundColor: "#FFEFE5" }}>
      <NavbarHomeN />
      <div className="flex flex-col md:flex-row items-start justify-center w-full p-4 mt-32">
        <div className="w-full md:w-3/4 p-4">
          <h1 className="text-3xl font-bold text-center mb-6">Mis Libros Rentados</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            {rentedBooks.length > 0 ? (
              rentedBooks.map((rent) => (
                <div
                  key={rent.id_rent}
                  className="flex flex-col items-center p-4 rounded-lg shadow-md hover:shadow-lg transition"
                  style={{
                    backgroundColor: "#e0c5bc",
                    minHeight: "350px", 
                  }}
                >
                  <img
                    src={rent.Book.image}
                    alt={rent.Book.name_book}
                    className="h-48 w-40 object-cover rounded mb-4" 
                  />
                  <div className="flex flex-col justify-between flex-grow">
                    <h4 className="text-lg font-semibold text-center">
                      {rent.Book.name_book}
                    </h4>
                    <p className="text-sm text-gray-700 text-center">
                      {rent.Book.author}
                    </p>
                    <div className="mt-2 text-center">
                      <p className="text-sm text-gray-600">
                        <span className="font-bold">Fecha de renta:</span>{" "}
                        {new Date(rent.request_date).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-bold">Fecha de devolución:</span>{" "}
                        {new Date(rent.return_date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-700">
                No tienes libros rentados.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myspace;
