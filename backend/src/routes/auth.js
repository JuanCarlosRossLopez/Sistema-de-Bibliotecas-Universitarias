const express = require('express');
const { login, verifyToken, isAdmin, isEmployee, isStudent } = require('../middlewares/auth');
const router = express.Router();

router.post('/login', login);

router.get('/admin', [verifyToken, isAdmin], (req, res) => {
    res.status(200).send('Admin Content');
});

router.get('/employee', [verifyToken, isEmployee], (req, res) => {
    res.status(200).send('Employee Content');
});

router.get('/student', [verifyToken, isStudent], (req, res) => {
    res.status(200).send('Student Content');
});

module.exports = router;
