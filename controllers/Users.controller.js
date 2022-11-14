
const Users = require('../models/User.model');

module.exports.usersController = {
    addUser: (req, res) => {
        Users.create({
            name: req.body.name,
            bio: req.body.bio,
            isBlocked: req.body.isBlocked
        }).then(() => {
            res.json("Пользователь добавлен");
        })
    },
    blockUser: (req, res) => {
        Users.findByIdAndUpdate(req.params.userId, {isBlocked: true}).then( () => {
            res.json('Пользователь заблокирован')
        })
    },
}