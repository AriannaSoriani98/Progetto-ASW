var express = require('express');
var app = express();
var mongoose = require('mongoose')
var cors = require('cors')

var path = require('path');

global.appRoot = path.resolve(__dirname);

var PORT = 3000;

mongoose
    .connect('mongodb://127.0.0.1:27017/dbsa',
        { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));

app.use(cors())


//Per gestire i parametri passati nel corpo della richiesta http.
app.use(express.json());

var routes = require('./routes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(PORT, function () {
  console.log('Node API server started on port '+PORT + 'at '+ path);
});
