import axios from 'axios';


export const fetchBooks = async () => {
  try {
    const response = await axios.get('http://localhost:3000/books');
    return response.data; // Devuelve la lista de libros en formato JSON
  } catch (error) {
    console.error('Error al obtener los libros:', error);
    throw error;
  }
};

export const fetchCategoryBooks = async () => {
  try {
    const response = await axios.get('http://localhost:3000/category');
    return response.data; // Devuelve la lista de libros en formato JSON
  } catch (error) {
    console.error('Error al obtener las etiquetas de libros:', error);
    throw error;
  }
};