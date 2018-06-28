const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
require('./db')

const notes = require('./notes/notes.controller')
app.use('/api/notes', notes)

module.exports = app
