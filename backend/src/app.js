const express = require('express');
const dotenv = require('dotenv');
// Asegúrate de que la ruta sea correcta
const categoryRoutes = require('./routes/categoryBooksRoutes');

dotenv.config();

const app = express();

app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes JSON

// Asegúrate de que la ruta esté registrada correctamente
app.use('/category',categoryRoutes) // Prefijo de las rutas

module.exports = app; // No inicializar el servidor aquí