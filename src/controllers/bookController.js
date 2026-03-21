const Book = require('../models/book');

// Get all books
const getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// Get book by ID
const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
};

// Add new book
const addBook = async (req, res) => {
  const { title, stock } = req.body;

  const newBook = new Book({ title, stock });
  await newBook.save();

  res.status(201).json(newBook);
};

// Update book
const updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!book) return res.status(404).json({ message: 'Book not found' });

  res.json(book);
};

// Delete book
const deleteBook = async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  res.json({ message: 'Book deleted' });
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook
};