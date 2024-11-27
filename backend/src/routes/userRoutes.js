// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rutas para CRUD de usuarios
router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.get('/rentbyuser/:userId/books/:bookId', userController.isBookRentedByUser);
router.get('/rentbyuser/:userId', userController.getBookRentByUserId);


module.exports = router;
