const categoryBooks = require('../models/CategoryBook');
const Book = require('../models/Book');
const BookPivot = require('../models/BookPivot');
const findCategory= async (body)=>{
    try{
        return await categoryBooks.findAll(body);
    }catch(error){
        console.error("Error en repository all",error)
        throw error;
    }
};

const findCategoryById= async (id)=>{
try{
    return await categoryBooks.findByPk(id)

}catch(error){
    console.error("Error al encontrar")
    throw error
};
}

const createCategoryBook = async(body)=>{
try{
    return await categoryBooks.create(body)
}catch(error){
    console.error("error al crear la categoria")
    throw error
}}

const updateCategoryBook = async (body, id) => {
    try {
        return await categoryBooks.update(body, {
            where: {
                id_category: id
            }
        });
    } catch (error) {
        console.error("Error al actualizar en el service", error);
        throw error;
    }
};

const deleteCategoryBook = async (id) => {
    try {
        return await categoryBooks.destroy({
            where: {
                id_category: id
            }
        });
    } catch (error) {
        console.error("Error en eliminar en service", error);
        throw error;
    }
};

const addBookToCategory = async (bookId, categoryIds) => {
    try {
        console.log(`Attempting to add book with ID ${bookId} to categories with IDs ${categoryIds}`);

        const book = await Book.findByPk(bookId);
        if (!book) {
            console.error(`Book with ID ${bookId} not found`);
            throw new Error('Book not found');
        }

        // Ensure categoryIds is an array
        if (!Array.isArray(categoryIds)) {
            console.error('categoryIds must be an array');
            throw new Error('categoryIds must be an array');
        }

        for (const categoryId of categoryIds) {
            const category = await categoryBooks.findByPk(categoryId);
            if (!category) {
                console.error(`Category with ID ${categoryId} not found`);
                throw new Error(`Category with ID ${categoryId} not found`);
            }

            // Insert into the pivot table
            await BookPivot.create({
                id_book_id: bookId,
                id_category_id: categoryId
            });
        }

        return { message: 'Book added to Categories successfully' };
    } catch (error) {
        console.error("Error adding Book to Categories in repository", error);
        throw error;
    }
};

const getBooksByCategory = async (id) => {
    try {
        const category = await categoryBooks.findByPk(id, {
            include: {
                model:Book,
                attributes: ['id_book', 'name_book', 'author', 'quantity', 'link_book']
            }
        });
        return category.Books;
    } catch (error) {
        console.error("Error getting Books by Category in repository", error);
        throw error;
    }
};


module.exports={
    findCategory,
    findCategoryById,
    createCategoryBook,
    updateCategoryBook,
    deleteCategoryBook,
    addBookToCategory,
    getBooksByCategory
}