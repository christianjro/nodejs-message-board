const express = require('express')
const router = express.Router()

const messages = [
    {
        title: "ABC",
        text: "Hi there!",
        user: "Alex",
        added: new Date()
    },
    {
        title: "DEF",
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
]

router.get('/', (req, res) => {
    res.render('index', { title: "Mini Message Board", messages: messages })
})

router.get('/new', (req, res) => {
    res.render('form')
})

router.post('/new', (req, res) => {
    let messageTitle = req.body.messageTitle
    let messageText = req.body.messageText
    let messageUser = req.body.messageUser
    messages.push({
        title: messageTitle,
        text: messageText, 
        user: messageUser,
        added: new Date()
    })
    res.redirect('/')
})

module.exports = router