require('dotenv').config()
var express = require('express')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

const { clientErrorHandler, serverErrorHandler} = require('./middlewares/errorHandler')

var indexRouter = require('./routes/index')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use(clientErrorHandler)
app.use(serverErrorHandler)

module.exports = app
