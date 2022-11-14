const mongoose = require("mongoose");

const genresSchema = mongoose.Schema({
  name: String,
  description: String,
});

const Genres = mongoose.model("genres", genresSchema);

module.exports = Genres;
