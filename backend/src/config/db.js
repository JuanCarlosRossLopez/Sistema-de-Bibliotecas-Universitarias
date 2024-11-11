const {Sequelize}=require('sequelize')
require('dotenv').config(); // Asegúrate de cargar las variables de entorno

const sequelize = new Sequelize('biblioteca', 'root', '', {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log('Conectado a la base de datos');
    })
    .catch(err => {
        console.error('Error al conectar con la base de datos', err);
    });

module.exports = sequelize;