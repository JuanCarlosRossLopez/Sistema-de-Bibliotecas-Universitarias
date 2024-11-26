import React, { useState, useEffect } from "react";
import NavbarEJ from "../../components/navbarEj";
import SidebarEJ from "../../components/sidebarEj";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

function TablaLibros() {
  const MySwal = withReactContent(Swal);
  const [books, setBooks] = useState([]);
  const [typeofbook, setTypeofbook] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchBooks();
    fetchTypeofbook();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
      MySwal.fire("Error", "No se pudieron cargar los libros", "error");
    }
  };

  const fetchTypeofbook = async () => {
    try {
      const response = await axios.get("http://localhost:3000/typeofbook");
      setTypeofbook(response.data);
    } catch (error) {
      console.error("Error fetching types of book:", error);
      MySwal.fire("Error", "No se pudieron cargar los tipos de libros", "error");
    }
  };

  const showBookForm = (book = null) => {
    const isEdit = Boolean(book);

    MySwal.fire({
      title: isEdit ? "Editar Libro" : "Crear Libro",
      html: `
        <input type="text" id="name" class="swal2-input" value="${book?.name_book || ""}" placeholder="Nombre del libro">
        <input type="text" id="imagen" class="swal2-input" value="${book?.image || ""}" placeholder="URL imagen">
        <input type="text" id="description" class="swal2-input" value="${book?.description || ""}" placeholder="Descripción">
        <input type="text" id="author" class="swal2-input" value="${book?.author || ""}" placeholder="Autor">
        <input type="text" id="number_serie" class="swal2-input" value="${book?.number_serie || ""}" placeholder="Número de serie">
        <input type="number" id="quantity" class="swal2-input" value="${book?.quantity || ""}" placeholder="Cantidad">
        <input type="text" id="link_book" class="swal2-input" value="${book?.link_book || ""}" placeholder="Link del libro">
        <select id="type" class="swal2-input">
          ${typeofbook
          .map(
            (type) =>
              `<option value="${type.id_type}" ${type.id_type === book?.type_id ? "selected" : ""
              }>${type.type_of_book}</option>`
          )
          .join("")}
        </select>
      `,
      confirmButtonText: "Guardar",
      showCancelButton: true,
      preConfirm: async () => {
        const name = document.getElementById("name").value;
        const author = document.getElementById("author").value;
        const quantity = document.getElementById("quantity").value;
        const type = document.getElementById("type").value;

        if (!name || !author || !quantity || !type) {
          MySwal.showValidationMessage("Todos los campos son obligatorios");
        }

        return { name, author, quantity, type };
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const url = isEdit
            ? `http://localhost:3000/books/${book.id_book}`
            : "http://localhost:3000/books";
          const method = isEdit ? "put" : "post";
          await axios[method](url, result.value);

          MySwal.fire(
            "Éxito",
            `Libro ${isEdit ? "actualizado" : "creado"} correctamente`,
            "success"
          );
          fetchBooks();
        } catch (error) {
          MySwal.fire("Error", `No se pudo ${isEdit ? "actualizar" : "crear"} el libro`, "error");
        }
      }
    });
  };

  const handleCreateBook = () => showBookForm();
  const handleEditBook = (book) => showBookForm(book);


  const handleDeleteBook = (book) => {
    MySwal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3000/books/${book.id_book}`);
          MySwal.fire("Eliminado", "Libro eliminado correctamente", "success");
          fetchBooks();
        } catch (error) {
          MySwal.fire("Error", "No se pudo eliminar el libro", "error");
        }
      }
    });
  };

  const handleViewDetails = (book) => {
    MySwal.fire({
      title: `Detalles de ${book.name_book}`,
      html: `
        <p><b>Autor:</b> ${book.author}</p>
        <p><b>Descripción:</b> ${book.description}</p>
        <p><b>Serie:</b> ${book.number_serie}</p>
        <p><b>Link:</b> <a href="${book.link_book}" target="_blank">${book.link_book}</a></p>
      `,
    });
  };


  return (
    <div className="bg-[#FFEFE5] min-h-screen w-full">
      <NavbarEJ />
      <div className=" fixed top-0">
        <SidebarEJ />
      </div>

      <div className="flex justify-center h-full p-4">
        <div className="bg-[#E0C5BC] p-4 md:p-8 rounded-md max-h-[700px] w-full sm:w-11/12 md:w-3/4 lg:w-4/5 xl:w-4/5 mt-32 sm:mt-24 md:mt-28">
          <div className="flex flex-col items-center justify-between pb-6">
            <div className="text-center md:text-left">
              <h2 className="text-gray-600 font-semibold text-base md:text-xl"> Gestión de Libros</h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4 md:gap-2 md:pt-3 md:flex-row items-center mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-4">
              <div className="flex bg-gray-50 items-center p-2 rounded-md w-full md:w-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                <input className="bg-transparent outline-none ml-1 block w-full md:w-auto" type="text" placeholder="Search..." />
              </div>
              <button className="bg-[#A2726A] hover:bg-[#e8a599] px-3 md:px-4 py-2 rounded-md text-white font-semibold">Filtrar por...</button>
              <button className="bg-[#A2726A] hover:bg-[#e8a599] px-3 md:px-4 py-2 rounded-md text-white font-semibold" onClick={handleCreateBook}>Crear Libro</button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="w-full rounded-lg overflow-visible">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-3 md:px-5 py-3 border-b-2 border-transparent bg-transparent text-left text-xs font-semibold text-gray-600 uppercase">Nombre</th>
                    <th className="px-3 md:px-5 py-3 border-b-2 border-transparent bg-transparent text-left text-xs font-semibold text-gray-600 uppercase">Autor</th>
                    <th className="px-3 md:px-5 py-3 border-b-2 border-transparent bg-transparent text-left text-xs font-semibold text-gray-600 uppercase">Cantidad</th>
                    <th className="px-3 md:px-5 py-3 border-b-2 border-transparent bg-transparent text-center ml-10 text-xs font-semibold text-gray-600 uppercase">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book) => (
                    <tr className=' border-b-2'>
                      <td className="px-3 md:px-5 py-5 bg-transparent text-sm">
                        <div className="flex items-center">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-nowrap"> {book.name_book} </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 md:px-5 py-5 border-b border-transparent bg-transparent text-sm">
                        <p className="text-gray-900 whitespace-nowrap"> {book.author} </p>
                      </td>
                      <td className="px-3 md:px-5 py-5 border-b border-transparent bg-transparent text-sm">
                        <p className="text-gray-900 whitespace-nowrap"> {book.quantity} </p>
                      </td>
                      <td className="px-3 md:px-5 py-5 border-b border-transparent bg-transparent text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-yellow-500 hover:text-yellow-700 leading-tight">
                          <FaEdit size={24} onClick={() => handleEditBook(book)} />
                        </span>
                        <span className="relative inline-block px-3 py-1 font-semibold text-red-500 hover:text-red-700 leading-tight">
                          <FaTrash size={24} onClick={() => handleDeleteBook(book)} />
                        </span>
                        <span className="relative inline-block px-3 py-1 font-semibold text-gray-500 hover:text-gray-700 leading-tight">
                          <FaEye size={24} onClick={() => handleViewDetails(book)} />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-3 md:px-5 py-5 bg-transparent flex flex-col xs:flex-row items-center xs:justify-between">
                <span className="text-xs xs:text-sm text-gray-900">Showing 1 to 4 of 50 Entries</span>
                <div className="inline-flex mt-2 xs:mt-0">
                  <button className="text-sm text-indigo-50 bg-[#A2726A] hover:bg-[#e8a599] font-semibold py-2 px-4 rounded-l">Prev</button>
                  <button className="text-sm text-indigo-50 bg-[#A2726A] hover:bg-[#e8a599] font-semibold py-2 px-4 rounded-r">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default TablaLibros;