const app = require('./app'); // Importar desde app.js
const sequelize = require('./config/db');

const port = process.env.PORT || 3000; // Asegúrate de que el puerto esté definido

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`);
    });
}).catch(error => {
    console.error('Error al sincronizar la base de datos:', error);
});
