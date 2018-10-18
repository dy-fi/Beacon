const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/beacon')

module.exports = mongoose.model('Event', {
    name: String,
    description: String,
    date: Date,
    location: String,
})
