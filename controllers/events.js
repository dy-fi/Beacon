// dependencies
const express = require('express')
const eventsRouter = express.Router()

// models
const Event = require('../models/events')


// READ -ALL
eventsRouter.get('/', (req, res) => {
    var query = { status: "public" }
    res.render('beacon-index.handlebars', {query})
})

// READ -ONE
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

// READ -NEW
eventsRouter.get('events/new', (req, res) => {
    res.render('events-new');
})

// CREATE
eventsRouter.post('events/new', (req, res) => {
    Event.create(req.body).then(event => {
        res.redirect('events/:id')
    }).catch(e => {
        console.log(e);
    })
})

// UPDATE -EDIT
eventsRouter.put('events/:id', (req, res) => {
    Event.findByIdandUpdate(req.params.id).then(event => {
        res.redirect('events/${event}')
    }).catch(e => {
        console.log(e);
    })
})

// DESTROY
eventsRouter.delete('events/:id', (req, res) => {
    Event.findByIdAndRemove(req.params.id).then(event => {
        res.redirect('events/:id')
    }).catch(e => {
        console.log(e);
    })
})

module.exports = eventsRouter;
