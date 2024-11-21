import axios from 'axios';

const API_URL = 'http://localhost:3000/book';

export const fetchBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Devuelve la lista de libros en formato JSON
  } catch (error) {
    console.error('Error al obtener los libros:', error);
    throw error;
  }
};
