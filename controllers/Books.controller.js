const Books = require("../models/Books.model");
const Clients = require("../models/Clients.model");


module.exports.booksController = {
  addBook: (req, res) => {
    Books.create({
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre,
      reviews: req.body.reviews,
    }).then((data) => {
      res.json(data);
    });
  },
  deleteBook: (req, res) => {
    Books.findByIdAndRemove(req.params.bookId).then((books) => {
      res.json(books);
    });
  },
  updateBook: (req, res) => {
    Books.findByIdAndUpdate(
      req.params.bookId,
      {
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre,
      },
      { new: true }
    ).then((books) => {
      res.json(books);
    });
  },
  getBookbyId: (req, res) => {
    Books.findById(req.params.bookId)
      .populate("genre")
      .then((books) => {
        res.json(books);
      });
  },
  getBooks: (req, res) => {
    Books.find()
      .populate("genre")
      .then((books) => {
        res.json(books);
      });
  },
  getBookbyGenre: (req, res) => {
    Books.find({ genre: req.params.genreId })
      .populate("genre")
      .then((books) => {
        res.json(books);
      });
  },
  removeBooktoBan: async (req, res) => {
    try {
     await Clients.findByIdAndUpdate(req.params.clientId, {
        $set: {
          rentBooks: [],
        },
      });
      await Clients.findByIdAndUpdate(req.params.clientId, { isBlocked: true });
      await Books.findByIdAndUpdate(req.params.bookId, {
        $pull: { rented: req.params.clientId },
      });
      res.json("Пользователь заблокирован");
    } catch (err) {
      res.json(err);
    }
  },
};
