import { useState, useEffect } from 'react';
import { fetchBooks, fetchCategoryBooks } from '../../services/APIBooks';
import Etiquetas from '../../components/Etiquetas';
import BarraBusqueda from '../../components/BarraBusqueda';
import NavbarHomeN from '../../components/navbarHomeNegro';
import { useNavigate } from 'react-router-dom';

const BooksCatalog = () => {
  const [libros, setLibros] = useState([]);
  const [filteredLibros, setFilteredLibros] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [selectedEtiquetas, setSelectedEtiquetas] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const cargarLibros = async () => {
      try {
        const data = await fetchBooks();
        setLibros(data);
        setFilteredLibros(data);
      } catch (error) {
        console.error('Error al cargar los libros:', error);
      }
    };

    const cargarCategorias = async () => {
      try {
        const data = await fetchCategoryBooks();
        setCategorias(data);
      } catch (error) {
        console.error('Error al cargar las categorías:', error);
      }
    };

    cargarLibros();
    cargarCategorias();
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
      librosFiltrados = librosFiltrados.filter(
        (libro) => libro.id_typeofbook_id === 1 || libro.id_typeofbook_id === 2 || libro.id_typeofbook_id === 3
      );
    } else if (selectedEtiquetas.includes('digital')) {
      librosFiltrados = librosFiltrados.filter(
        (libro) => libro.id_typeofbook_id === 1 || libro.id_typeofbook_id === 3
      );
    } else if (selectedEtiquetas.includes('fisico')) {
      librosFiltrados = librosFiltrados.filter(
        (libro) => libro.id_typeofbook_id === 2 || libro.id_typeofbook_id === 3
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

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen" style={{ backgroundColor: '#FFEFE5' }}>
      
      
      <div className=" sticky top-0 z-10 bg-white">
  <NavbarHomeN />
</div>
      {/* Añadir un margen superior adecuado para evitar que el contenido se sobreponga al navbar */}
      <div className="content flex flex-col md:flex-row items-start justify-center w-full p-4 mt-32">
        <div className="w-full md:w-1/4 p-4">
          <Etiquetas
            categorias={categorias}
            selectedEtiquetas={selectedEtiquetas}
            onToggleEtiqueta={handleToggleEtiqueta}
          />
        </div>
  
        <div className="w-full md:w-3/4 p-4">
          <BarraBusqueda onSearch={handleSearch} />
  
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {filteredLibros.length > 0 ? (
              filteredLibros.map((libro) => (
                <div
                  key={libro.id_book}
                  className="flex flex-col items-center p-4 rounded-lg shadow-md hover:shadow-lg transition"
                  style={{ backgroundColor: '#e0c5bc' }}
                >
                  <img
                    src={libro.image.startsWith('http') ? libro.image : `data:image/jpeg;base64,${libro.image}`}
                    alt={libro.name_book}
                    className="h-72 w-60 object-cover rounded mb-4"
                  />
                  <h4 className="text-lg font-semibold text-center">{libro.name_book}</h4>
                  <p className="text-sm text-gray-700 text-center">{libro.author}</p>
                  <div className="mt-2">
                    <span
                      className={`text-xs py-1 px-3 rounded ${
                        libro.id_typeofbook_id === 2
                          ? 'bg-green-500 text-white'
                          : libro.id_typeofbook_id === 1
                          ? 'bg-yellow-500 text-black'
                          : 'bg-blue-500 text-white'
                      }`}
                    >
                      {libro.id_typeofbook_id === 2
                        ? 'Digital'
                        : libro.id_typeofbook_id === 1
                        ? 'Físico'
                        : 'Físico/Digital'}
                    </span>
                  </div>
                  <div className="mt-4">
                    <button
                      className="bg-yellow-800 text-white px-4 py-1 rounded shadow-md hover:bg-yellow-900 transition duration-200"
                      onClick={() => navigate(`/verlibro/${libro.id_book}`)}
                    >
                      Ver Libro
                    </button>
                  </div>
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
  );};

export default BooksCatalog;
