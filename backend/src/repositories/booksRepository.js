
const books = require('../models/Book');
const categoryBooks = require('../models/CategoryBook');
const BookPivot = require('../models/BookPivot');

const findBook = async (body) => {
    try {
        return await books.findAll({
            include: [{
                model: categoryBooks,
                attributes: ['category']
            }],
            ...body
        });
    } catch (error) {
        console.error("Error en repository all", error);
        throw error;
    }
};

const findBookById = async (id) => {
    try {
        return await books.findByPk(id,
            {
                include: [{
                    model: categoryBooks,
                    attributes: ['category']
                }]
            }
        );
    } catch (error) {
        console.error("Error al encontrar");
        throw error;
    }
}

const createBook = async (body) => {
    try {
        return await books.create(body);
    } catch (error) {
        console.error("error al crear el libro");
        throw error;
    }
};

const updateBook = async (body, id) => {
    try {
        return await books.update(body, {
            where: {
                id_book: id
            }
        });
    } catch (error) {
        console.error("Error al actualizar en el service", error);
        throw error;
    }
};


const deleteBook = async (id) => {
    try {
        // Encuentra el libro por ID
        const book = await books.findByPk(id, {
            include: [{
                model: categoryBooks
            }]
        });

        if (!book) {
            throw new Error('Libro no encontrado');
        }

        // Elimina las asociaciones en la tabla pivote
        await book.setCategoryBooks([]);

        // Elimina el libro
        await books.destroy({
            where: {
                id_book: id
            }
        });

        return true;
    } catch (error) {
        console.error("Error en eliminar en service", error);
        throw error;
    }
};




module.exports = {
    findBook,
    findBookById,
    createBook,
    deleteBook,
    updateBook

};