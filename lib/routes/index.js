const express = require('express')
const router = express.Router()
// Add all routes here
const notes = require('./notes/notes.controller')
router.use('/notes', notes)
module.exports = router
