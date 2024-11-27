const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Importar cors
const categoryRoutes = require('./routes/categoryBooksRoutes');
const userRoutes = require('./routes/userRoutes');
const statusRoutes = require('./routes/statusRoutes');
const bookRoute = require('./routes/bookRoute');
const CategoryBooks = require('./models/CategoryBook');
const Books = require('./models/Book');
const BookPivot = require('./models/BookPivot');
const rolRoutes = require('./routes/roleRoutes');
const studentRoutes = require('./routes/studentRoutes');
const bookRentRoute = require('./routes/bookRentRoutes');
const typeofbookRoute = require('./routes/typeofbookRoutes');
const auth = require('./routes/auth');
dotenv.config();

const app = express();

app.use(cors({ origin: 'http://localhost:5173' })); // Configurar CORS para permitir solicitudes desde el frontend
app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes JSON

// Associations entre modelos eso me dijo chat
Books.associate({ CategoryBooks, BookPivot });
CategoryBooks.associate({ Books, BookPivot });

app.use('/category', categoryRoutes);
app.use('/users', userRoutes);
app.use('/status', statusRoutes);
app.use('/rols', rolRoutes);
app.use('/students', studentRoutes);
app.use('/books', bookRoute);
app.use('/bookRent', bookRentRoute);
app.use('/typeofbook', typeofbookRoute);
app.use('/auth', auth);

// Inicializar roles y status
/*Descomentar esto si quieres para inicializar los roles (después de haber creado las tablas corrienfo el back),
volver a comentar al crearlos para subir*/
const initRoles = require('./initRoles');
initRoles();
// const initStatus= require('./initStatus');
// initStatus();
// const initTypeBook= require('./initTypeOfBook');
// initTypeBook();
module.exports = app; // No inicializar el servidor aquí
