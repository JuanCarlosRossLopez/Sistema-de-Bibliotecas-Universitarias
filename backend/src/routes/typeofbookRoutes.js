const express = require('express');
const router = express.Router();
const typeofbook = require('../controllers/typeofbookContoller');

router.get('/',typeofbook.getTypeofbook);

module.exports = router;