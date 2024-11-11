const { json } = require("express");
const categoryBooksService=require("../service/categoyBooksService");




const getCategorysBooks=async(req,res)=>{
    try {
        const CategoryBook= await categoryBooksService.findCategory();
        res.status(200),json(CategoryBook)
    }catch(error){
        res.status(400).json({message:error.message})
    }
}



