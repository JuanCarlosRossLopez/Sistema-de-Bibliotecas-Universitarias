import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarEJ from "../../components/navbarEj";
import SidebarEJ from "../../components/sidebarEj";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import imageCompression from 'browser-image-compression';

const TablaLibros = () => {
  const MySwal = withReactContent(Swal);
  const [books, setBooks] = useState([]);
  const [typeofbook, setTypeofbook] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 4;

  useEffect(() => {
    fetchBooks();
    fetchTypeofbook();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/books");
      const booksData = response.data.map(book => ({
        ...book,
        type_of_book: typeofbook.find(type => type.id_type === book.id_typeofbook_id)?.type_of_book
      }));
      setBooks(booksData);
      setFilteredBooks(booksData);
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

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterBooks(query, filterType);
  };

  const handleFilter = (type) => {
    setFilterType(type);
    filterBooks(searchQuery, type);
  };

  const filterBooks = (searchQuery, filterType) => {
    let filtered = books;

    if (searchQuery) {
      filtered = filtered.filter(book =>
        book.name_book.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterType) {
      filtered = filtered.filter(book => book.id_typeofbook_id === parseInt(filterType));
    }

    setFilteredBooks(filtered);
    setCurrentPage(1);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredBooks.length / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/category");
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      MySwal.fire("Error", "No se pudieron cargar las categorías", "error");
    }
  };

  const reduceImageSize = async (file) => {
    const options = {
      maxSizeMB: 0.001,  // Reducir el tamaño máximo a 0.01MB 
      maxWidthOrHeight: 800,  // Ajustar la dimensión máxima de la imagen a 800px
      useWebWorker: true
    };
    try {
      const compressedFile = await imageCompression(file, options);
      const base64Image = await imageCompression.getDataUrlFromFile(compressedFile);
      return base64Image.split(',')[1];  // Obtener solo la parte base64
    } catch (error) {
      console.error("Error al comprimir la imagen:", error);
      return null;
    }
  };

  // Uso en showBookForm
  const showBookForm = (book = null) => {
    const isEdit = Boolean(book);

    MySwal.fire({
      title: isEdit ? "Editar Libro" : "Crear Libro",
      html: `
        <input type="text" id="name" class="swal2-input" value="${book?.name_book || ""}" placeholder="Nombre del libro">
        <input type="file" id="image" class="swal2-input" placeholder="Imagen">
        <input type="text" id="description" class="swal2-input" value="${book?.description || ""}" placeholder="Descripción">
        <input type="text" id="author" class="swal2-input" value="${book?.author || ""}" placeholder="Autor">
        <input type="text" id="number_serie" class="swal2-input" value="${book?.number_serie || ""}" placeholder="Número de serie">
        <input type="number" id="quantity" class="swal2-input" value="${book?.quantity || ""}" placeholder="Cantidad">
        <input type="text" id="link_book" class="swal2-input" value="${book?.link_book || ""}" placeholder="Link del libro">
        <select id="type" class="swal2-input">
          ${typeofbook
          .map(
            (type) =>
              `<option value="${type.id_type}" ${type.id_type === book?.id_typeofbook_id ? "selected" : ""
              }>${type.type_of_book}</option>`
          )
          .join("")}
        </select>
      `,
      confirmButtonText: "Guardar",
      showCancelButton: true,
      preConfirm: async () => {
        const name = document.getElementById("name").value;
        const imageInput = document.getElementById("image");
        const description = document.getElementById("description").value;
        const author = document.getElementById("author").value;
        const number_serie = document.getElementById("number_serie").value;
        const quantity = document.getElementById("quantity").value;
        const link_book = document.getElementById("link_book").value;
        const id_typeofbook_id = document.getElementById("type").value;

        if (!name || !author || !quantity || !id_typeofbook_id) {
          MySwal.showValidationMessage("Todos los campos son obligatorios");
          return false;
        }

        if (imageInput.files && imageInput.files[0]) {
          const base64Image = await reduceImageSize(imageInput.files[0]);
          return {
            name_book: name,
            image: base64Image,
            description,
            author,
            number_serie,
            quantity,
            link_book,
            id_typeofbook_id
          };
        } else {
          return {
            name_book: name,
            image: book ? book.image : '',
            description,
            author,
            number_serie,
            quantity,
            link_book,
            id_typeofbook_id
          };
        }
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          console.log("Datos enviados:", result.value);

          const url = isEdit
            ? `http://localhost:3000/books/${book.id_book}`
            : "http://localhost:3000/books";
          const method = isEdit ? "put" : "post";
          await axios({
            method,
            url,
            data: result.value,
            headers: { "Content-Type": "application/json" },
          });

          MySwal.fire(
            "Éxito",
            `Libro ${isEdit ? "actualizado" : "creado"} correctamente`,
            "success"
          );
          fetchBooks();
        } catch (error) {
          console.error("Error saving book:", error);
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

  const handleAssignCategories = async () => {
    const categories = await fetchCategories();

    MySwal.fire({
      title: "Asignar Categorías",
      html: `
        <select id="selectedBook" class="swal2-input">
          ${books.map(book => `<option value="${book.id_book}">${book.name_book}</option>`).join('')}
        </select>
        <div>
          ${categories.map(category => `
            <div class="swal2-checkbox">
              <input type="checkbox" id="category-${category.id_category}" value="${category.id_category}">
              <label for="category-${category.id_category}">${category.category}</label>
            </div>
          `).join('')}
        </div>
      `,
      confirmButtonText: "Asignar",
      showCancelButton: true,
      preConfirm: () => {
        const selectedBook = document.getElementById("selectedBook").value;
        const selectedCategories = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

        if (!selectedBook || selectedCategories.length === 0) {
          MySwal.showValidationMessage("Debes seleccionar un libro y al menos una categoría");
          return false;
        }

        return { selectedBook, selectedCategories };
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { selectedBook, selectedCategories } = result.value;

          console.log("Datos enviados:", {
            id_book: selectedBook,
            categories: selectedCategories
          });

          await axios.post("http://localhost:3000/category/addBookToCategory", {
            id_book: selectedBook,
            categories: selectedCategories
          });

          MySwal.fire("Éxito", "Categorías asignadas correctamente", "success");
        } catch (error) {
          console.error("Error assigning categories:", error);
          MySwal.fire("Error", "No se pudieron asignar las categorías", "error");
        }
      }
    });
  };

  return (
    <div className="bg-[#FFEFE5] min-h-screen w-full">
      <NavbarEJ />
      <div className="fixed top-0">
        <SidebarEJ />
      </div>

      <div className="flex justify-center h-full p-4">
        <div className="bg-[#E0C5BC] p-4 md:p-8 rounded-md max-h-[700px] w-full sm:w-11/12 md:w-3/4 lg:w-4/5 xl:w-4/5 mt-32 sm:mt-24 md:mt-28">
          <div className="flex flex-col items-center justify-between pb-6">
            <div className="text-center md:text-left">
              <h2 className="text-gray-600 font-semibold text-base md:text-xl">Gestión de Libros</h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4 md:gap-2 md:pt-3 md:flex-row items-center mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-4">
              <div className="flex bg-gray-50 items-center p-2 rounded-md w-full md:w-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                <input
                  className="bg-transparent outline-none ml-1 block w-full md:w-auto"
                  type="text"
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
              <select
                className="bg-[#A2726A] hover:bg-[#e8a599] px-3 md:px-4 py-2 rounded-md text-white font-semibold"
                value={filterType}
                onChange={(e) => handleFilter(e.target.value)}
              >
                <option value="">Filtrar por tipo...</option>
                {typeofbook.map((type) => (
                  <option key={type.id_type} value={type.id_type}>
                    {type.type_of_book}
                  </option>
                ))}
              </select>
              <button
                className="bg-[#A2726A] hover:bg-[#e8a599] px-3 md:px-4 py-2 rounded-md text-white font-semibold"
                onClick={handleCreateBook}
              >
                Crear Libro
              </button>
              <button
                className="bg-[#A2726A] hover:bg-[#e8a599] px-3 md:px-4 py-2 rounded-md text-white font-semibold"
                onClick={handleAssignCategories}
              >
                Asignar Categorías
              </button>
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
                    <th className="px-3 md:px-5 py-3 border-b-2 border-transparent bg-transparent text-left text-xs font-semibold text-gray-600 uppercase">Tipo</th>
                    <th className="px-3 md:px-5 py-3 border-b-2 border-transparent bg-transparent text-center ml-10 text-xs font-semibold text-gray-600 uppercase">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {currentBooks.length > 0 ? (
                    currentBooks.map((book) => (
                      <tr key={book.id_book} className='border-b-2'>
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
                          <p className="text-gray-900 whitespace-nowrap"> {book.type_of_book} </p>
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
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-5 text-gray-700">No se encontraron libros que coincidan con los filtros.</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div className="px-3 md:px-5 py-5 bg-transparent flex flex-col xs:flex-row items-center xs:justify-between">
                <span className="text-xs xs:text-sm text-gray-900">Mostrando {indexOfFirstBook + 1} a {Math.min(indexOfLastBook, filteredBooks.length)} de {filteredBooks.length} entradas</span>
                <div className="inline-flex mt-2 xs:mt-0">
                  {pageNumbers.map(number => (
                    <button key={number} onClick={() => paginate(number)} className={`text-sm text-indigo-50 bg-[#A2726A] hover:bg-[#e8a599] font-semibold py-2 px-4 ${currentPage === number ? 'bg-gray-700' : 'bg-[#A2726A]'} mx-1 rounded`}>
                      {number}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TablaLibros;