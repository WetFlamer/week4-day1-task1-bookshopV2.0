const mongoose = require("mongoose")

const clientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    isBlocked: Boolean,
    rentBooks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'books'
    }]
})

const Clients = mongoose.model('clients', clientSchema)

module.exports = Clients