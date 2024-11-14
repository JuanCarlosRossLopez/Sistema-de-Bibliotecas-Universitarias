const categoryBooks = require('../models/CategoryBook');
const Book = require('../models/Book');
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

const addBookToCategory = async (bookId, categoryId) => {
    try {
        const book = await Book.findByPk(bookId);
        const category = await categoryBooks.findByPk(categoryId);

        if (!book || !category) {
            throw new Error('Book or Category not found');
        }

        await book.addCategory(category); // Utiliza el método correcto para la relación belongsToMany
        return { message: 'Book added to Category successfully' };
    } catch (error) {
        console.error("Error adding Book to Category in repository", error);
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
