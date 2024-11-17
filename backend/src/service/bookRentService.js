const BookRentRespository = require('../repositories/bookRentRepository');

const getBookRent = async () => {
    try {
        return await BookRentRespository.getBookRent();
    } catch (error) {
        console.error("Error en service all", error);
        throw error;
    }
}

const getBookRentById = async (id) => {
    try {
        return await BookRentRespository.getBookRentById(id);
    } catch (error) {
        console.error("Error en service all", error);
        throw error;
    }
}

const getBookRentByStatusId = async (id) => {
    try {
        return await BookRentRespository.getBookRentByStatusId(id);
    } catch (error) {
        console.error("Error en service all", error);
        throw error;
    }
}

const createBookRent = async (body) => {
    try {
        return await BookRentRespository.createBookRent(body);
    } catch (error) {
        console.error("Error en service all", error);
        throw error;
    }
}

const updateBookRent = async (body, id) => {
    try {
        return await BookRentRespository.updateBookRent(body, id);
    } catch (error) {
        console.error("Error en service all", error);
        throw error;
    }
}

const deleteBookRent = async (id) => {
    try {
        return await BookRentRespository.deleteBookRent(id);
    } catch (error) {
        console.error("Error en service all", error);
        throw error;
    }
}

const getOverdueBookRents = async () => {
try{
    return await BookRentRespository.getOverdueBookRents();

}catch(error){
    console.error("Error en service all", error);
    throw error;
}
}

module.exports = {
    getBookRent,
    getBookRentById,
    getBookRentByStatusId,
    createBookRent,
    updateBookRent,
    deleteBookRent,
    getOverdueBookRents
}