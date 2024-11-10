const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); // Cargar variables de entorno desde el archivo .env
const cors = require('cors'); // Si necesitas habilitar CORS
const morgan = require('morgan'); // Para loguear las solicitudes HTTP (opcional)

const app = express();
const port = process.env.PORT;

// Middleware para manejo de peticiones JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS (si es necesario)
app.use(cors());

// Log de las solicitudes (opcional)
app.use(morgan('dev'));

// Rutas principales
app.get('/', (req, res) => {
  res.send('¡Bienvenido al backend de la biblioteca!');
});

// Aquí puedes agregar más rutas y lógica

// Conexión a la base de datos
const { poolPromise } = require('./config/db');

poolPromise.then(pool => {
  console.log('Conectado a la base de datos');
}).catch(err => {
  console.error('Error al conectar con la base de datos', err);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
