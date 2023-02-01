var mongoose = require('mongoose');

Booking = require("../models/bookingsModel.js")(mongoose);



exports.list_bookings = function(req, res) {
	Booking.find({}, function(err, booking) {
		if (err)
			res.send(err);
		res.json(booking);
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

