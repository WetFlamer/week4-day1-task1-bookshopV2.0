const { Router } = require("express");
const { reviewsController } = require("../controllers/Reviews.controller");

const router = Router();
router.post("/reviews/add/:bookId", reviewsController.addReviewBook)
router.delete("/reviews/delete/:reviewId", reviewsController.deleteReview)
router.get("/reviews/:bookId", reviewsController.getReviewbyBook)
module.exports = router