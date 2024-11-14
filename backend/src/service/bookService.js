const booksRepository= require('../repositories/booksRepository')


const findBook = async(body) =>{
const book= await booksRepository.findBook(body);
if(!book){
throw new Error("No se encontraron libros")
}

return book

}


const findBookById= async(id)=>{
    const book = await booksRepository.findBookById(id)
    if(!book){
        throw new Error("No se enconmtro el id")
    }
    return book
}

const createBook=async(body)=>{
    console.info(body);
    const book= await booksRepository.createBook(body)
    if(!book){
        throw new Error("No se enconmtro el id")
    }
    return book;
}


const updateBook = async (body,id) =>{
    console.info(body,id)
    const book = await booksRepository.updateBook(body,id)
    if(!book){
        throw new Error("No se enconmtro el id")
    }
    return book
}

const deleteBook = async (id) => {
    const book = await booksRepository.deleteBook(id);
    if (!book) {
        throw new Error("No se encontró el id");
    }
    return book;
}

module.exports={
    findBook,
    findBookById,
    createBook,
    deleteBook,
    updateBook
}