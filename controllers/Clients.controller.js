const Books = require('../models/Books.model');
const Clients = require('../models/Clients.model');
module.exports.clientsController = {
    addClient: (req, res) => {
        Clients.create({
            name: req.body.name,
            isBlocked: req.body.isBlocked
        }).then(() => {
            res.json("Пользователь добавлен");
        })
    },
    removeClient: (req, res) => {
        Clients.findByIdAndRemove(req.params.id).then(() => {
            res.json("Пользователь удалён")
        })
    },
    blockClient: (req, res) => {
        Clients.findByIdAndUpdate(req.params.userId, {isBlocked: true}).then( () => {
            res.json('Пользователь заблокирован')
        })
    },
    getAllClients: (req, res) => {
        Clients.find().then((data) => {
            res.json(data)
        })
    },
    getClientById: (req, res) => {
        Clients.findById(req.params.id).then((data) => {
            res.json(data)
        })
},
takeBook: async (req, res) => {
    try {
        const book = await Books.findById(req.params.bookId);
        const client = await Clients.findById(req.body.clients)           
        if (client.isBlocked) {
            return res.json("Пользователь заблокирован")
        }
        if (client.rentBooks.length >= 3) {
            return res.json("Нельзя арендовать больше 3-х книг")
        }

        if (book.rented) {                                          
            return res.json("Книга уже арендована другим клиентом")
        }
        await Clients.findByIdAndUpdate(req.body.clients, {
            $addToSet: {
                rentBooks: req.params.bookId,
            },
        })
        await Books.findByIdAndUpdate(req.params.bookId, {
            $addToSet: { rented: req.body.clients },
        });
        res.json("Книга добавлена в корзину")
    }
    catch (err) {
        res.json(err)
    }
},
removeBook: async (req, res) => {
    try {
        await Clients.findByIdAndUpdate(req.body.clients, {
            $pull: { rentBooks: req.params.bookId }
        })
        await Books.findByIdAndUpdate(req.params.bookId, {
            $pull: {
                rented: req.body.clients
            }
        })
        res.json("Книга удалена из корзины клиента")
    } catch (error) {
        res.json(error)
    }
}
}