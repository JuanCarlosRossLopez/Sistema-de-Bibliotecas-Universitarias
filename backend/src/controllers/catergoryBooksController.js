const { json } = require("express");
const categoryBooksService=require("../service/categoyBooksService");





const getCategorysBooks=async(req,res)=>{
    try {
        const CategoryBook= await categoryBooksService.findCategory();
        res.status(200).json(CategoryBook)
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

const getCategoryById=async (req,res)=>{
    try{
        const CategoryBook=await categoryBooksService.findCategoryById(req.params.id)
        res.status(200).json(CategoryBook);
    }catch(error){
        res.status(400).json({message:error.message})
    }
}


const createCategoryBook=async(req,res)=>{
    try{
        const CategoryBook = await categoryBooksService.createCategoryBook(req.body)
        res.status(200).json(CategoryBook)
    }catch(error){
        res.status(400).json({message:error.message})
    }
}
const updateCategoryBook = async (req, res) => {
    try {
        console.log("ID:", req.params.id); // Verifica el valor de req.params.id
        const updateCategory = await categoryBooksService.updateCategoryBook(req.body, req.params.id);
        res.status(200).json(updateCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
const deleteCategory = async (req, res) => {
    try {
        const deleted = await categoryBooksService.deleteCategoryBook(req.params.id);
        res.status(200).json(deleted);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const addBookToCategory = async (req, res) => {
    const { bookId, categoryId } = req.body;

    try {
        const result = await categoryBooksService.addBookToCategory(bookId, categoryId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error adding Book to Category', error });
    }
};


module.exports={
    getCategorysBooks,
    getCategoryById,
    createCategoryBook,
    updateCategoryBook,
    deleteCategory,
    addBookToCategory
}
