const bookService = require('../service/bookService');

const getBooks = async (req, res) => {
    try {
        const books = await bookService.findBook();
        res.status(200).json(books);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getBookById = async (req, res) => {
    try {
        const book = await bookService.findBookById(req.params.id);
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const createBook = async (req, res) => {
    try {
        const book = await bookService.createBook(req.body);
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateBook = async (req, res) => {
    try {
        const updatedBook = await bookService.updateBook(req.body, req.params.id);
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteBook = async (req, res) => {
    try {
        const deleted = await bookService.deleteBook(req.params.id);
        res.status(200).json(deleted);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getBooks,
    getBookById,
    createBook,
    deleteBook,
    updateBook,
  }