const { Router } = require("express");
const { genresController } = require("../controllers/Genres.controller");

const router = Router();
router.post("/admin/genres/add", genresController.addGenre)
router.delete("/admin/genres/delete/:genreId", genresController.deleteGenre)
router.get("/genres", genresController.getGenres)
module.exports = router