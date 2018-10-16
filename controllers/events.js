// dependencies
const express = require('express')
const eventsRouter = express.Router()

// models


// ROUTES

// SHOW ALL
eventsRouter.get('/', (req, res) => {
    res.render('beacon-index.handlebars')
})

// SHOW ONE
eventsRouter.get('/events/:id', (req, res) => {

})

module.exports = eventsRouter;
