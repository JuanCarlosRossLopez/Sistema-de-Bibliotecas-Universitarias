const mysql = require('mysql2');
require('dotenv').config();  // Asegúrate de cargar las variables de entorno

// Crear la conexión
const pool = mysql.createPool({
    host: process.env.DB_HOST || '127.0.0.1',  // O 'localhost'
    user: process.env.DB_USER || 'root',  // Usuario de MySQL
    password: process.env.DB_PASSWORD || '',  // Contraseña vacía si no tienes
    database: process.env.DB_NAME || 'biblioteca',  // Nombre de la base de datos
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Crear una promesa para manejar la conexión
const poolPromise = new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
        if (err) {
            reject('Error de conexión a la base de datos: ' + err);
        } else {
            resolve(connection);
        }
    });
});

module.exports = { poolPromise };
