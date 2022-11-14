const Genres = require("../models/Genres.model");

module.exports.genresController = {
  addGenre: (req, res) => {
    Genres.create({
      name: req.body.name,
      description: req.body.description,
    }).then(() => {
      res.json("Жанр добавлен");
    });
  },
  deleteGenre: (req, res) => {
    Genres.findByIdAndDelete(req.params.genreId).then(genres => {
        res.json(genres)
    })
  },
  getGenres: (req, res) => {
    Genres.find().then(books => {
        res.json(books)
    })
  },
};
