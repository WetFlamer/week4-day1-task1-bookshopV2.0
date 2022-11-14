const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
  user: {
    ref: "user",
    type: mongoose.SchemaTypes.ObjectId,
  },
  book: {
    ref: "books",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Reviews = mongoose.model("reviews", reviewsSchema);

module.exports = Reviews;
