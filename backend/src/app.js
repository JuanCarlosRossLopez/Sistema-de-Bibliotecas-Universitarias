const express = require('express');
const dotenv = require('dotenv');
const categoryRoutes = require('./routes/categoryBooksRoutes');
const userRoutes = require('./routes/userRoutes'); // Asegúrate de que la ruta sea correcta


dotenv.config();

const app = express();

app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes JSON

// Asegúrate de que la ruta esté registrada correctamente
app.use('/category',categoryRoutes) // Prefijo de las rutas
app.use('/user', userRoutes)

module.exports = app; // No inicializar el servidor aquí // No inicializar el servidor aquí