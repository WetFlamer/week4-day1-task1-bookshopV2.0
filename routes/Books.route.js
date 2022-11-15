const { Router } = require("express");
const { booksController } = require("../controllers/Books.controller");

const router = Router();
router.post("/admin/books/add", booksController.addBook)
router.delete("/admin/books/delete/:bookId", booksController.deleteBook)
router.patch("/admin/books/edit/:bookId", booksController.updateBook)
router.get("/books", booksController.getBooks)
router.get("/books/:bookId", booksController.getBookbyId)
router.get("/books/genre/:genreId", booksController.getBookbyGenre)
router.patch("/admin/ban/:clientId/:bookId/", booksController.removeBooktoBan)
module.exports = router