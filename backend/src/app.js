const express = require('express');
const dotenv = require('dotenv');
const categoryRoutes = require('./routes/categoryBooksRoutes');
const userRoutes = require('./routes/userRoutes');
const statusRoutes = require('./routes/statusRoutes');
const bookRoute= require('./routes/bookRoute');
const CategoryBooks = require('./models/CategoryBook');
const Books = require('./models/Book');
const BookPivot = require('./models/BookPivot');
const rolRoutes = require('./routes/roleRoutes');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();

const app = express();

app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes JSON

//Associations entre modelos eso me dijo chat
Books.associate({ CategoryBooks, BookPivot });
CategoryBooks.associate({ Books, BookPivot });


app.use('/category', categoryRoutes); 
app.use('/users', userRoutes);
app.use('/status', statusRoutes);
app.use('/rols', rolRoutes);
app.use('/students', studentRoutes);
app.use('/book', bookRoute)

module.exports = app; // No inicializar el servidor aquí
