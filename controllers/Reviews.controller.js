const Reviews = require("../models/Reviews.model");

module.exports.reviewsController = {
    addReviewBook: (req,res) =>{
        Reviews.create({
            text: req.body.text,
            author: req.body.author,
            book: req.body.book
        }).then( () => {
            res.json('Рецензия добавлена')
        })
    },
    deleteReview: (req, res) => {
        Reviews.findByIdAndDelete(req.params.reviewId).then( (review) => {
            res.json(review)
        })
    },
    getReviewbyBook: (req, res) => {
        Reviews.find({book: req.params.bookId}).then( (review) => {
            res.json(review)
        })
    },
};
