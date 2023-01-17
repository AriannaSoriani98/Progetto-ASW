var express = require('express');
var app = express();
var mongoose = require('mongoose')
var cors = require('cors')
var path = require('path');

global.appRoot = path.resolve(__dirname);

var PORT = 3000;

mongoose.connect('mongodb://localhost/PrenotazioniMare', { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });

app.use(cors())

//Per gestire i parametri passati nel corpo della richiesta http.
app.use(express.json());

var bookingRoute = require('./routes/bookingRoute');
app.use('/api/booking',bookingRoute)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(PORT, function () {
    console.log('Node API server started on port '+PORT);
});

//https://www.youtube.com/watch?v=tc4D8d_hrVc&list=PLflVqQLAWzC9qybF40gPXpzntMQIoYG5u&index=8
