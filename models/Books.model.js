const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  name: String,
  author: String,
  genre: {
    ref: 'genres',
    type: mongoose.SchemaTypes.ObjectId
  },
  rented: {
   ref: "users",
   type: mongoose.SchemaTypes.ObjectId,
   default: ''
  },
  reviews: {
    ref: 'reviews',
    type: mongoose.SchemaTypes.ObjectId
  }

});

const Books = mongoose.model('books', bookSchema);

module.exports = Books;
