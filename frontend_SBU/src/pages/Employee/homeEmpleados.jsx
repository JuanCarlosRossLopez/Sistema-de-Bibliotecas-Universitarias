import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import NavbarEJ from "../../components/navbarEj";
import SidebarEJ from "../../components/sidebarEj";

function HomeEmpleados() {
  const [reservedBooks, setReservedBooks] = useState([]);

  useEffect(() => {
    fetchReservedBooks();
  }, []);

  const fetchReservedBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/bookRent");
      setReservedBooks(response.data);
    } catch (error) {
      console.error("Error fetching reserved books:", error);
    }
  };

  const handleStatusUpdate = async (rent) => {
    Swal.fire({
      title: "Actualizar Estado",
      text: `¿Estás seguro de que deseas marcar el libro "${rent.Book.name_book}" como entregado?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, actualizar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const updatedData = { id_status_id: 2 }; // Cambiar el estado a 2 (Entregado)
          await axios.put(`http://localhost:3000/bookRent/update/${rent.id_rent}`, updatedData);
          console.log(updatedData)
          Swal.fire("Actualizado", "El libro ha sido marcado como entregado.", "success");
          fetchReservedBooks(); // Recargar datos
        } catch (error) {
          console.error("Error updating book status:", error);
          Swal.fire("Error", "No se pudo actualizar el estado", "error");
        }
      }
    });
  };

  return (
    <div className="bg-[#FFEFE5] min-h-screen w-full overflow-hidden">
      <NavbarEJ />
      <div className="fixed top-0">
        <SidebarEJ />
      </div>
      <div className="flex justify-center items-center mt-20 h-full p-4">
        <div className="flex flex-col gap-8 lg:gap-16">
          <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
            <div className="bg-[#C19B93] rounded-md flex-1 p-4 md:p-6 lg:p-8">
              <h1 className="font-bold text-base md:text-lg lg:text-xl text-center md:text-left">
                Devoluciones pendientes: <b>{reservedBooks.filter((book) => book.status === 1).length}</b>
              </h1>
            </div>
            <div className="bg-[#C19B93] rounded-md flex-1 p-4 md:p-6 lg:p-8">
              <h1 className="font-bold text-base md:text-lg lg:text-xl text-center md:text-left">
                Libros reservados: <b>{reservedBooks.length}</b>
              </h1>
            </div>
          </div>
          {reservedBooks.map((rent) => (
            <div
              key={rent.id_rent}
              className="flex flex-col items-center p-4 rounded-lg shadow-md hover:shadow-lg transition"
              style={{
                backgroundColor: "#e0c5bc",
                minHeight: "350px",
              }}
            >
              <img
                src={rent.Book.image.startsWith('http') ? rent.Book.image :  `data:image/jpeg;base64,${rent.Book.image}`}
                alt={rent.Book.name_book}
                className="h-48 w-40 object-cover rounded mb-4"
              />
              <div className="flex flex-col justify-between flex-grow">
                <h4 className="text-lg font-semibold text-center">{rent.Book.name_book}</h4>
                <p className="text-sm text-gray-700 text-center">{rent.Book.author}</p>
                <div className="mt-2 text-center">
                  <p className="text-sm text-gray-600">
                    <span className="font-bold">Fecha de renta:</span>{" "}
                    {new Date(rent.request_date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-bold">Fecha de devolución:</span>{" "}
                    {new Date(rent.return_date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-bold">Estado actual:</span>{" "}
                    {rent.status === 1 ? "Pendiente" : "Entregado"}
                  </p>
                </div>
                
                  <button
                    onClick={() => handleStatusUpdate(rent)}
                    className="bg-[#000000] hover:bg-[#ff2b2b] px-4 py-2 rounded-md text-white font-semibold mt-4"
                  >
                    Marcar como Entregado
                  </button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeEmpleados;
