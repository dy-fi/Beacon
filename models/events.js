const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.set('debug', true);

mongoose.connect('mongodb://localhost/beacon', {  useNewUrlParser: true });

module.exports = mongoose.model('Event', {
    name: String,
    description: String,
    date: { type: Date, default: Date.now },
    location: String,
    status: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'owner'
    },
    going: [{
        type: Schema.Types.ObjectId,
        ref: 'going'
    }],
});
