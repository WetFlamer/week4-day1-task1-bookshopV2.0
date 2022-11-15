const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    name: String,
    author: String,
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'genres'
    },
    rented: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clients'
    },
    review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reviews'
    }]
})

const Books = mongoose.model('books', bookSchema)
module.exports = Books