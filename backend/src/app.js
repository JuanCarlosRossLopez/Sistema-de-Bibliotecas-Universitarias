const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes'); // Asegúrate de que la ruta sea correcta

dotenv.config();

const app = express();

app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes JSON

// Asegúrate de que la ruta esté registrada correctamente
app.use('/api', userRoutes); // Prefijo de las rutas

const port = process.env.PORT; // Definir el puerto, si no está en el .env

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

module.exports = app;
