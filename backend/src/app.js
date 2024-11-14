const express = require('express');
const dotenv = require('dotenv');
const categoryRoutes = require('./routes/categoryBooksRoutes');
const userRoutes = require('./routes/userRoutes'); // Asegúrate de que la ruta sea correcta
const statusRoutes = require('./routes/statusRoutes');
const CategoryBooks = require('./models/CategoryBook');
const Books = require('./models/Book');
const BookPivot = require('./models/BookPivot');
dotenv.config();

const app = express();

app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes JSON

//Associations entre modelos eso me dijo chat
Books.associate({ CategoryBooks, BookPivot });
CategoryBooks.associate({ Books, BookPivot });

// Asegúrate de que la ruta esté registrada correctamente
app.use('/category',categoryRoutes) // Prefijo de las rutas
app.use('/user', userRoutes)
app.use('/status', statusRoutes)

module.exports = app; // No inicializar el servidor aquí // No inicializar el servidor aquí