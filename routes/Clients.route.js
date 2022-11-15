const { Router } = require("express");
const { clientsController } = require("../controllers/Clients.controller");

const router = Router();
router.get('/admin/clients', clientsController.getAllClients)
router.get('/admin/clients/:id', clientsController.getClientById)
router.post('/admin/clients', clientsController.addClient)
router.delete('/admin/clients/:id', clientsController.removeClient)
router.patch("/books/take/:bookId", clientsController.takeBook);
router.patch("/books/remove/:bookId", clientsController.removeBook);
module.exports = router