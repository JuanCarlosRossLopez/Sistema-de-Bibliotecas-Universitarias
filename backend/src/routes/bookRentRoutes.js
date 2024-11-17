const express=require('express');
const router=express.Router();
const BookRentController=require('../controllers/bookRentController');

router.get('/',BookRentController.getBookRent);
router.get('/:id',BookRentController.getBookRentById);
router.get('/status/:id',BookRentController.getBookRentByStatusId);
router.get('/overdue',BookRentController.getOverdueBookRents);
router.post('/create',BookRentController.createBookRent);
router.put('/update/:id',BookRentController.updateBookRent);
router.delete('/delete/:id',BookRentController.deleteBookRent);

module.exports=router;