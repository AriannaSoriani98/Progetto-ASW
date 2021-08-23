var mongoose = require('mongoose');
Booking = require("../models/bookingModel.js")(mongoose);

exports.list_booking = function(req, res) {
    Booking.find({}, function(err, booking) {
        if (err)
            res.send(err);
        res.json(booking);
    });
};

exports.read_booking = function(req, res) {
    /*
    TODO cast req.params.id to ObjectId
    */
    Booking.findById(req.params.id, function(err, booking) {
        if (err)
            res.send(err);
        else{
            if(booking==null){
                res.status(404).send({
                    description: 'Booking not found'
                });
            }
            else{
                res.json(booking);
            }
        }
    });
};

exports.create_booking = function(req, res) {
    var new_booking = new Booking(req.body);
    new_booking.save(function(err, booking) {
        if (err)
            res.send(err);
        res.status(201).json(booking);
    });
};

exports.update_booking = function(req, res) {
    Booking.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, booking) {
        if (err)
            res.send(err);
        else{
            if(booking==null){
                res.status(404).send({
                    description: 'Booking not found'
                });
            }
            else{
                res.json(booking);
            }
        }
    });
};

exports.delete_booking = function(req, res) {
    Booking.deleteOne({_id: req.params.id}, function(err, result) {
        if (err)
            res.send(err);
        else{
            if(result.deletedCount==0){
                res.status(404).send({
                    description: 'Booking not found'
                });
            }
            else{
                res.json({ message: 'Task successfully deleted' });
            }
        }
    });
};
