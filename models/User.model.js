const mongoose = require('mongoose');
const userScheme = mongoose.Schema({
  name: String,
  bio: String,
  isBlocked: {
    type: Boolean,
    default: false
  },
  reviews: [{
    ref: 'reviews',
    type: mongoose.SchemaTypes.ObjectId,
  }],
  rentBooks: {
    ref: 'books',
    type: mongoose.SchemaTypes.ObjectId
  }
});

const Users = mongoose.model('users', userScheme);

module.exports = Users;
