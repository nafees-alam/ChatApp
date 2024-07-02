const express = require('express')
const router = express.Router();
const Chat = require('../models/Chat.Model.js')

//get all chats
router.get('/', async(req, res) => {
    try {
        const chats = await Chat.find();
        res.json(chats)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//create new chat message
router.post('/', async(req, res) => {
    const chat = new Chat({
        message: req.body.message,
        sender: req.body.sender
    })

    try {
        const newChat = await chat.save();
        res.status(201).json(newChat);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router;