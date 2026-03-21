const Book = require('../models/book');

// helper function to format DB document for frontend
const formatBook = (book) => ({
  id: book._id.toString(),
  title: book.title,
  author: book.author,
  price: book.price,
  category: book.category,
  description: book.description,
  imageUrl: book.imageUrl,
  stock: book.stock
});

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books.map(formatBook));
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch books', error: error.message });
  }
};

// Get book by ID
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(formatBook(book));
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch book', error: error.message });
  }
};

// Add new book
const addBook = async (req, res) => {
  try {
    const { title, author, price, category, description, imageUrl, stock } = req.body;

    const newBook = new Book({
      title,
      author,
      price,
      category,
      description,
      imageUrl,
      stock
    });

    await newBook.save();
    res.status(201).json(formatBook(newBook));
  } catch (error) {
    res.status(500).json({ message: 'Failed to add book', error: error.message });
  }
};

// Update book
const updateBook = async (req, res) => {
  try {
    const { title, author, price, category, description, imageUrl, stock } = req.body;

    const book = await Book.findByIdAndUpdate(
      req.params.id,
      {
        title,
        author,
        price,
        category,
        description,
        imageUrl,
        stock
      },
      { new: true, runValidators: true }
    );

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json(formatBook(book));
  } catch (error) {
    res.status(500).json({ message: 'Failed to update book', error: error.message });
  }
};

//Stock decrease for new orders
const decreaseStock = async (req, res) => {
  try {
    const { quantity } = req.body;

    if (!quantity || quantity <= 0) {
      return res.status(400).json({ message: 'Quantity must be greater than 0' });
    }

    const book = await Book.findOneAndUpdate(
      {
        _id: req.params.id,
        stock: { $gte: quantity }
      },
      {
        $inc: { stock: -quantity }
      },
      {
        new: true
      }
    );

    if (!book) {
      return res.status(400).json({
        message: 'Book not found or insufficient stock'
      });
    }

    res.json(formatBook(book));
  } catch (error) {
    res.status(500).json({ message: 'Failed to decrease stock', error: error.message });
  }
};

// Delete book
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete book', error: error.message });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  decreaseStock,
  deleteBook
};