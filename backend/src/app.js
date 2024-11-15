const express = require('express');
const dotenv = require('dotenv');
const categoryRoutes = require('./routes/categoryBooksRoutes');
const userRoutes = require('./routes/userRoutes');
const statusRoutes = require('./routes/statusRoutes');
const rolRoutes = require('./routes/roleRoutes');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();

const app = express();

app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes JSON


app.use('/category', categoryRoutes); 
app.use('/user', userRoutes);
app.use('/status', statusRoutes);
app.use('/rol', rolRoutes);
app.use('/student', studentRoutes);

module.exports = app; // No inicializar el servidor aquí
