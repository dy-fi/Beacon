const mongoose = require('mongoose')
const schema = mongoose.Schema

mongoose.connect('mongodb://localhost/beacon', {  useNewUrlParser: true });

module.exports = mongoose.model('Event', {
    name: String,
    description: String,
    date: String,
    location: String,
    status: String,
})
