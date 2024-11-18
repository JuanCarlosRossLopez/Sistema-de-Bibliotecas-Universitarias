const express = require('express');
const router = express.Router();
const rolController = require('../controllers/rolController');

// Rutas para CRUD de roles
router.post('/', rolController.createRol);
router.get('/', rolController.getAllRols);
router.get('/:id', rolController.getRolById);
router.put('/:id', rolController.updateRol);
router.delete('/:id', rolController.deleteRol);

module.exports = router;
