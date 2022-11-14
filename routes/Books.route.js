const { Router } = require("express");
const { booksController } = require("../controllers/Books.controller");

const router = Router();
router.post("/books/admin/add", booksController.addBook)
router.delete("/books/admin/delete/:bookId", booksController.deleteBook)
router.patch("/books/admin/edit/:bookId", booksController.updateBook)
router.patch("/books/torent/:bookId", booksController.toRent)
router.get("/books", booksController.getBooks)
router.get("/books/:bookId", booksController.getBookbyId)
router.get("/books/genre/:genreId", booksController.getBookbyGenre)
module.exports = router