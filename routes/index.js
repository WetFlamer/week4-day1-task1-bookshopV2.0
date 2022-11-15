const { Router } = require('express');

const router = Router();

router.use('/', require('./Books.route'))
router.use('/', require('./Genres.route'))
router.use('/', require('./Clients.route'))
router.use('/', require('./Reviews.route'))
module.exports = router;