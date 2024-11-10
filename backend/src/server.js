const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); 
const cors = require('cors'); 
const morgan = require('morgan'); 

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());


app.use(morgan('dev'));


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
