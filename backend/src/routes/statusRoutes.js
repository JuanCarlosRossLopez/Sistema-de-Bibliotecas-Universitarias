const express = require('express');
const router = express.Router();
const status= require('../controllers/statusController');

router.get('/status',status.getStatus);
router.get('/status/:id',status.getStatusById);
router.post('/status',status.createStatus);
router.put('/status/:id',status.updateStatus);
router.delete('/status/:id',status.deleteStatus);

module.exports = router;
