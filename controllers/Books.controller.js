const Books = require('../models/Books.model')

module.exports.booksController = {
    addBook: (req, res) => {
        Books.create({
            name: req.body.name,
            author: req.body.author,
            genre: req.body.genre,
            rented: req.body.rented
        }).then(() => {
            res.json("Книга добавлена");
        })
    },
    deleteBook: (req, res) => {
        Books.findByIdAndRemove(req.params.bookId).then(books => {
            res.json(books)
        })
    },
    updateBook: (req, res) => {
        Books.findByIdAndUpdate(req.params.bookId, {
            name: req.body.name,
            author: req.body.author,
            genre: req.body.genre
        },{new: true}).then( books => {
            res.json(books)
        })
    },
    getBookbyId: (req, res) => {
        Books.findById(req.params.bookId)
        .populate('genre')
        .then(books => {
            res.json(books)
        })
    },
    getBooks: (req, res) => {
        Books.find()
        .populate('genre')
        .then(books => {
            res.json(books)
        })
    },
    getBookbyGenre: (req, res) => {
        Books.find({genre: req.params.genreId})
        .populate('genre')
        .then(books => {
            res.json(books)
        })
    },
    toRent: (req, res) => {
       Books.findByIdAndUpdate(req.params.bookId, {
        rented: req.body.rented
       }).then ( () => {
        res.json('Вы успешно взяли книгу')
       })
    }
}