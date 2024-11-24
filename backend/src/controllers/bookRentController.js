const BookRentService = require('../service/bookRentService');


const getBookRent = async (req, res) => {
    try {
        const bookRent = await BookRentService.getBookRent();
        res.status(200).json(bookRent);
    } catch (error) {
        console.error("Error en controller all", error);
        res.status(500).json({ message: "Error en el servidor" });
    }
}

const getBookRentById = async (req, res) => {
    try {
        const id = req.params.id;
        const bookRent = await BookRentService.getBookRentById(id);
        res.json(bookRent);
    } catch (error) {
        console.error("Error en controller all", error);
        res.status(500).json({ message: "Error en el servidor" });
    };
};

const getBookRentByStatusId = async (req, res) => {
    try {
        const id = req.params.id;
        const bookRent = await BookRentService.getBookRentByStatusId(id);
        res.json(bookRent);
    } catch (error) {
        console.error("Error en controller all", error);
        res.status(500).json({ message: "Error en el servidor" });
    }
}

const createBookRent = async (req, res) => {
    try {
        const body = req.body;
        const bookRent = await BookRentService.createBookRent(body);
        res.json(bookRent);
    } catch (error) {
        console.error("Error en controller all", error);
        res.status(500).json({ message: "Error en el servidor" });
    }
}

const updateBookRent = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const bookRent = await BookRentService.updateBookRent(body, id);
        res.json(bookRent);
    } catch (error) {
        console.error("Error en controller all", error);
        res.status(500).json({ message: "Error en el servidor" });
    }
}

const deleteBookRent = async (req, res) => {
    try {
        const id = req.params.id;
        const bookRent = await BookRentService.deleteBookRent(id);
        res.json(bookRent);
    } catch (error) {
        console.error("Error en controller all", error);
        res.status(500).json({ message: "Error en el servidor" });
    }
}

const getOverdueBookRents = async (req, res) => {
    try {
        const bookRent = await BookRentService.getOverdueBookRents();
        res.json(bookRent);
    } catch (error) {
        console.error("Error en controller all", error);
        res.status(500).json({ message: "Error en el servidor" });
    }
}

module.exports = {
    getBookRent,
    getBookRentById,
    getBookRentByStatusId,
    createBookRent,
    updateBookRent,
    deleteBookRent,
    getOverdueBookRents,
}