import { useState, useEffect } from 'react';
import { fetchBooks } from '../../services/APIBooks';
import Etiquetas from '../../components/Etiquetas';
import BarraBusqueda from '../../components/BarraBusqueda';
import NavbarHomeN from '../../components/navbarHomeNegro';

const BooksCatalog = () => {
  const [libros, setLibros] = useState([]);
  const [filteredLibros, setFilteredLibros] = useState([]);
  const [etiquetas, setEtiquetas] = useState([]);
  const [selectedEtiquetas, setSelectedEtiquetas] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const cargarLibros = async () => {
      try {
        const data = await fetchBooks();

        // Obtener etiquetas únicas
        const categorias = Array.from(
          new Map(
            data.flatMap((libro) =>
              libro.CategoryBooks.map((categoria) => ({
                id: categoria.BookPivot.id_category_id,
                category: categoria.category,
              }))
            ).map((categoria) => [categoria.id, categoria])
          ).values()
        );

        setLibros(data);
        setFilteredLibros(data);
        setEtiquetas(categorias);
      } catch (error) {
        console.error('Error al cargar los libros:', error);
      }
    };

    cargarLibros();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleToggleEtiqueta = (etiqueta) => {
    setSelectedEtiquetas((prev) =>
      prev.includes(etiqueta)
        ? prev.filter((e) => e !== etiqueta)
        : [...prev, etiqueta]
    );
  };

  useEffect(() => {
    let librosFiltrados = [...libros];
  
    // Filtrar por tipo de libro (Digital, Físico o Ambos)
    if (selectedEtiquetas.includes('digital') && selectedEtiquetas.includes('fisico')) {
      // Mostrar todos los libros con ambos tipos incluidos
      librosFiltrados = librosFiltrados.filter(
        (libro) => libro.id_typeofbook_id === 1 || libro.id_typeofbook_id === 2 || libro.id_typeofbook_id === 3
      );
    } else if (selectedEtiquetas.includes('digital')) {
      librosFiltrados = librosFiltrados.filter(
        (libro) => libro.id_typeofbook_id === 1 || libro.id_typeofbook_id === 3 // Digital o Ambos
      );
    } else if (selectedEtiquetas.includes('fisico')) {
      librosFiltrados = librosFiltrados.filter(
        (libro) => libro.id_typeofbook_id === 2 || libro.id_typeofbook_id === 3 // Físico o Ambos
      );
    }
  
    // Filtrar por categorías seleccionadas
    const categoriasSeleccionadas = selectedEtiquetas.filter((e) => typeof e === 'number');
    if (categoriasSeleccionadas.length > 0) {
      librosFiltrados = librosFiltrados.filter((libro) =>
        libro.CategoryBooks.some((categoria) =>
          categoriasSeleccionadas.includes(categoria.BookPivot.id_category_id)
        )
      );
    }
  
    // Filtrar por búsqueda de título
    if (searchQuery) {
      librosFiltrados = librosFiltrados.filter((libro) =>
        libro.name_book.toLowerCase().includes(searchQuery)
      );
    }
  
    setFilteredLibros(librosFiltrados);
  }, [selectedEtiquetas, searchQuery, libros]);
  

  return (
    <div
      className="flex flex-col items-center min-h-screen"
      style={{ backgroundColor: '#FFEFE5' }}
    >
      {/* Navbar */}
      <NavbarHomeN />

      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row items-start justify-center w-full p-4 mt-32">
        {/* Panel de filtros */}
        <div className="w-full md:w-1/4 p-4">
          <Etiquetas
            etiquetas={etiquetas}
            selectedEtiquetas={selectedEtiquetas}
            onToggleEtiqueta={handleToggleEtiqueta}
          />
        </div>

        {/* Contenedor del catálogo */}
        <div className="w-full md:w-3/4 p-4">
          {/* Barra de búsqueda */}
          <BarraBusqueda onSearch={handleSearch} />

          {/* Lista de libros */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {filteredLibros.length > 0 ? (
              filteredLibros.map((libro) => (
                <div
                  key={libro.id_book}
                  className="flex flex-col items-center p-4 rounded-lg shadow-md hover:shadow-lg transition"
                  style={{ backgroundColor: '#e0c5bc' }}
                >
                  <img
                    src={libro.image}
                    alt={libro.name_book}
                    className="h-72 w-60 object-cover rounded mb-4"
                  />
                  <h4 className="text-lg font-semibold text-center">
                    {libro.name_book}
                  </h4>
                  <p className="text-sm text-gray-700 text-center">
                    {libro.author}
                  </p>
                  <span
                    className={`text-xs mt-2 py-1 px-3 rounded ${
                      libro.id_typeofbook_id === 1
                        ? 'bg-green-500 text-white'
                        : libro.id_typeofbook_id === 2
                        ? 'bg-yellow-500 text-black'
                        : 'bg-blue-500 text-white'
                    }`}
                  >
                    {libro.id_typeofbook_id === 1
                      ? 'Digital'
                      : libro.id_typeofbook_id === 2
                      ? 'Físico'
                      : 'Físico/Digital'}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-700">
                No se encontraron libros que coincidan con los filtros.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCatalog;
