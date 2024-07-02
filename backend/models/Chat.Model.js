const mongoose = require('mongoose')

const chatSchema = mongoose.Schema({
    message:{type: String, required: true},
    sender:{type: String },
    timestamp:{type: Date, default: Date.now}
})

module.exports = mongoose.model('userChat', chatSchema)