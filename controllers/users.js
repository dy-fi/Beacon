// DEPENDENCIES
const express = require('express')
const User = require('../models/users')
const Event = require('../models/events')

// ROUTES

// REGISTER
app.get('/users/register', (req, res) => {
    res.render('users-register')
})

app.get('/users/login', (req, res) => {
    res.render('user-login')
})

// SHOW PROFILE
app.get('/users/:id', (req, res) => {
    User.findById(req.params.id).then(user => {
        res.render('user-show', {
            user: user,
        })
    })
})

// CREATE
app.post('/users/new', (req, res) => {
    User.findOne({ email: req.body.email }, function(err, user) {
        if(err) throw err;
        if(!user) {
            User.create(req.body).then(user => {
                req.session.userId = user._id
                res.status(200).send({ user: user })
            })
        } else {
            res.status(200).send({
                reason: 'Email already registered! If you have forgotten your password, please contact the administrator.'
            })
        }
    }).catch(err => {
        console.log(err)
    })
})
