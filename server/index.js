var express = require('express');
var app = express();
var mongoose = require('mongoose')
var cors = require('cors')

var path = require('path');

global.appRoot = path.resolve(__dirname);

var PORT = 3000;

//mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });
/*mongoose.connect('mongodb://mongodb:27017/dbsa' ,{ useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });
//'mongodb://mongodb:27017/dbsa'*/
//connessione al db
/*mongoose
    .connect('mongodb://progetto-asw_mongodb_1.progetto-asw_interna:27017/dbsa',
        { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));*/

var url = 'mongodb://172.25.0.3/:27017/dbsa'; //docker inspect $CONTAINER_NAME | grep IPAddress
mongoose.connect(
    url,
    { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
    function (err) {
      if (err){ console.log('Errore in connect');}
      else { console.log('connect SEMBRA OK'); }
    }
);

/*mongoose
    .connect(
        'mongodb://mongodb.interna:27017/dbsa',
        // 'mongodb://asw_mongodb_1.asw_interna:27017/dbsa', ANDAVA BENE
        { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));*/

app.use(cors())


//Per gestire i parametri passati nel corpo della richiesta http.
app.use(express.json());

var routes = require('./src/routes/bookingsRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(PORT, function () {
  console.log('Node API server started on port '+PORT);
});
