// dot env
require('dotenv').config();
// Declarations
const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')

// app
const app = express()

// static scripts and styles in public
app.use(express.static('public'));

// google maps
const googleMapsClient = require('@google/maps').createClient({
    key: process.env.MAPS_API_KEY
})

// // mongoose connect
// const db = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/app', {
//     useNewUrlParser: true
// }).catch(e => {
//     console.log(e)
// })

// session middleware
app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});

// port
const port = process.env.PORT || 3000;

// Express handlebars
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Method Override
app.use(methodOverride('_method'));

// Body parser
app.use(bodyParser.urlencoded({
    extended: true
}));

// Controllers
const handleEventRoutes = require('./controllers/events')

app.use(handleEventRoutes)

// App listen
app.listen(port, console.log('App listening on port ' + port));
