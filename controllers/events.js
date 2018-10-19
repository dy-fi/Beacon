// dependencies
const express = require('express')
const eventsRouter = express.Router()

// models
const Event = require('../models/events')


// READ -ALL PUBLIC EVENTS
eventsRouter.get('/', (req, res) => {
    var query = { status: "public" }
    Event.find(query).then(events => {
        console.log('This is the events: ' + events)
        res.render('beacon-index', {
            events: events
        })
    }).catch(e => {
        console.log(e);
    })
})

// NEW
eventsRouter.get('/events/new', (req, res) => {
    // res.send('Hello world')
    res.render('events-new', {});
})

// CREATE
eventsRouter.post('/events', (req, res) => {
    Event.create(req.body).then(event => {
        console.log(event)
        res.redirect(`events/${event._id}`)
    }).catch(e => {
        console.log(e);
    })
})

// READ -ONE
eventsRouter.get('/events/:id', (req, res) => {
    // res.send('Hello World!')
    Event.findById(req.params.id).then(events => {
        res.render('event-dashboard', {
            title: 'Dashboard',
            layout: 'map-dashboard',
            events: events,
        })
    }).catch(e => {
        console.log(e);
    })
})



// EDIT
eventsRouter.get('/events/:id/edit', function(req, res) {
    Event.findById(req.params.id, function(err, review) {
        res.render('events-edit', {
            events: events,
        });
    })
})

// UPDATE
eventsRouter.put('/events/:id', (req, res) => {
    Event.findByIdAndUpdate(req.params.id, req.body)
        .then(review => {
            res.redirect('events/{events._id}')
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
