var mongoose = require('mongoose');

Booking = require("../models/bookingsModel.js")(mongoose);



exports.list_bookings = function(req, res) {
	Booking.find({}, function(err, booking) {
		if (err)
			res.send(err);
		res.json(booking);
	});
};

