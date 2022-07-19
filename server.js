const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

// importing routers
const indexRouter = require('./routes/index')

// setup
app.set('view engine', 'ejs')
app.set('views',  __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

// using routers
app.use('/', indexRouter)

app.listen(3000)

