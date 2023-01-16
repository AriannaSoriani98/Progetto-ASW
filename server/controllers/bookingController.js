var mongoose = require('mongoose');
Prenotazione = require("../models/bookingModel.js")(mongoose);

exports.list_prenotazioni = function(req, res) {
    Prenotazione.find({}, function(err, prenotazione) {
        if (err)
            res.send(err);
        res.json(prenotazione);
    });
};
