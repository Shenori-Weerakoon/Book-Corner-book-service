const express = require('express');
const router = express.Router();
const { getAllBooks, getBookById, addBook, updateBook, decreaseStock, deleteBook } = require('../controllers/bookController');

// Routes
router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', addBook);
router.put('/:id', updateBook);
router.patch('/:id/decrease-stock', decreaseStock);
router.delete('/:id', deleteBook);

module.exports = router;