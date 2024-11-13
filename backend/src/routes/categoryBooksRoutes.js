const express = require("express");
const router = express.Router();
const categoryBooksController = require("../controllers/catergoryBooksController");


router.get("/", categoryBooksController.getCategorysBooks);
router.get("/:id", categoryBooksController.getCategoryById);
router.post("/post",categoryBooksController.createCategoryBook)
router.put("/update/:id", categoryBooksController.updateCategoryBook);
router.delete("/delete/:id", categoryBooksController.deleteCategory);
router.post("/addBookToCategory", categoryBooksController.addBookToCategory);

module.exports = router;
