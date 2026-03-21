const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  stock: { type: Number, required: true }
});

module.exports = mongoose.model('Book', BookSchema);