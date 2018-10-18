// dependencies
const express = require('express')
const eventsRouter = express.Router()

// models
const Event = require('../models/events')

// ROUTES

// SHOW ALL
eventsRouter.get('/', (req, res) => {
    var query = { status: "public" }
    res.render('beacon-index.handlebars', {query})
})

// SHOW ONE
eventsRouter.get('/events/:id', (req, res) => {
    Events.findById(req.params.id).then(event => {
        res.render('event-dashboard', {
            title: 'Dashboard',
            layout: 'map-dashboard',
            events: events,
        })

    }).catch(e => {
        console.log(e);
    })
})

module.exports = eventsRouter;
