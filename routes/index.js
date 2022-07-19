const express = require('express')
const router = express.Router()

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
]

router.get('/', (req, res) => {
    res.render('index', { title: "Mini Message Board", messages: messages})
})

router.get('/new', (req, res) => {
    res.render('form')
})

router.post('/new', (req, res) => {
    let messageUser = req.body.messageUser
    let messageText = req.body.messageText
    messages.push({
        user: messageUser,
        text: messageText, 
        added: new Date()
    })
    res.redirect('/')
})

module.exports = router