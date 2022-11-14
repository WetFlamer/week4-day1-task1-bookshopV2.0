const { Router } = require("express");
const { usersController } = require("../controllers/Users.controller");

const router = Router();
router.post('/users/add', usersController.addUser)
module.exports = router