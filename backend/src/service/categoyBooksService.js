
const CategoryBooks= require('../repositories/categoryBooksRepository');


const findCategory = async() =>{
const category= await CategoryBooks.findCategory();
if(!category){
throw new Error("No se encontraron categorias")
}
return category
}


const findCategoryById= async(id)=>{
    const category = await CategoryBooks.findCategoryById(id)
    if(!category){
        throw new Error("No se enconmtro el id")
    }
    return category
}

const createCategoryBook=async(body)=>{
    console.info(body);
    const category= await CategoryBooks.createCategoryBook(body)
    if(!category){
        throw new Error("No se enconmtro el id")
    }
    return category;
}

const updateCategoryBook = async (body,id) =>{
    console.info(body,id)
    const category = await CategoryBooks.updateCategoryBook(body,id)
    if(!category){
        throw new Error("No se enconmtro el id")
    }
    return category
}

const deleteCategoryBook = async (id) =>{
    console.info(id)
    const category = await CategoryBooks.deleteCategoryBook(id)
    if(!category){
        throw new Error("No se enconmtro el id")
    }
    return category
}

module.exports={
    findCategory,
    findCategoryById,
    createCategoryBook,
    updateCategoryBook,
    deleteCategoryBook
}