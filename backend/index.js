const express = require('express');
const { chats } = require('./data/data');
const mongoose = require('mongoose')
const cors = require('cors')
const chatRoutes = require('./routes/Chat.Routes.js')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.get('/api/chats', (req,res) => {
    res.send(chats)
})

app.use('/api/chats/db', chatRoutes);

app.listen(3000, console.log("Server is running on port 3000"));