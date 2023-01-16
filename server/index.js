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

var routes = require('./src/routes/reservationRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(PORT, function () {
  console.log('Node API server started on port '+PORT);
});