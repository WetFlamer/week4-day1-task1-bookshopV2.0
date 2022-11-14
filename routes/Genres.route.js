const { Router } = require("express");
const { genresController } = require("../controllers/Genres.controller");

const router = Router();
router.post("/genres/admin/add", genresController.addGenre)
router.delete("/genres/admin/delete/:genreId", genresController.deleteGenre)
router.get("/genres", genresController.getGenres)
module.exports = router