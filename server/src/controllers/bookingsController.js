var mongoose = require('mongoose');

BookingAlbatros = require("../models/bookingsModelAlbatros.js")(mongoose);
BookingHakunaMatata = require("../models/bookingsModelHakunaMatata.js")(mongoose);
BookingFaro = require("../models/bookingsModelFaro.js")(mongoose);
BookingMarrakech = require("../models/bookingsModelMarrakech.js")(mongoose);
BookingGranchio = require("../models/bookingsModelGranchio.js")(mongoose);
BookingFloridaBeach = require("../models/bookingsModelFloridaBeach.js")(mongoose);
BookingOasi = require("../models/bookingsModelOasi.js")(mongoose);
BookingMexico = require("../models/bookingsModelMexico.js")(mongoose);

exports.list_bookings_albatros = function(req, res) {
	BookingAlbatros.find({}, function(err, booking) {
		if (err)
			res.send(err);
		res.json(booking);
	});
};

exports.create_booking_albatros = function(req, res) {
	var new_booking = new BookingAlbatros(req.body);
	console.log('server added!')
	new_booking.save(function(err, booking) {
		if (err)
			res.send(err);
		res.status(201).json(booking);
	});
};

exports.delete_Albatros = function(req, res) {
	let num_item = BookingAlbatros.length;
	BookingAlbatros.findByIdAndRemove(req.params.id, function(err, result) {
		if (err) {

			res.status(404).send({
				description: 'Booking not found'
			});
		}
		else{
				res.json({ message: 'Task successfully deleted' });
		}
	});
};
exports.list_bookings_hakunamatata = function(req, res) {
	BookingHakunaMatata.find({}, function(err, booking) {
		if (err)
			res.send(err);
		res.json(booking);
	});
};

exports.create_booking_hakunamatata = function(req, res) {
	var new_booking = new BookingHakunaMatata(req.body);
	new_booking.save(function(err, booking) {
		if (err)
			res.send(err);
		res.status(201).json(booking);
	});
};

exports.list_bookings_faro = function(req, res) {
	BookingFaro.find({}, function(err, booking) {
		if (err)
			res.send(err);
		res.json(booking);
	});
};

exports.create_booking_faro = function(req, res) {
	var new_booking = new BookingFaro(req.body);
	new_booking.save(function(err, booking) {
		if (err)
			res.send(err);
		res.status(201).json(booking);
	});
};

exports.list_bookings_marrakech = function(req, res) {
	BookingMarrakech.find({}, function(err, booking) {
		if (err)
			res.send(err);
		res.json(booking);
	});
};

exports.create_booking_marrakech = function(req, res) {
	var new_booking = new BookingMarrakech(req.body);
	new_booking.save(function(err, booking) {
		if (err)
			res.send(err);
		res.status(201).json(booking);
	});
};

exports.list_bookings_granchio = function(req, res) {
	BookingGranchio.find({}, function(err, booking) {
		if (err)
			res.send(err);
		res.json(booking);
	});
};

exports.create_booking_granchio = function(req, res) {
	var new_booking = new BookingGranchio(req.body);
	new_booking.save(function(err, booking) {
		if (err)
			res.send(err);
		res.status(201).json(booking);
	});
};

exports.list_bookings_floridabeach = function(req, res) {
	BookingFloridaBeach.find({}, function(err, booking) {
		if (err)
			res.send(err);
		res.json(booking);
	});
};

exports.create_booking_floridabeach = function(req, res) {
	var new_booking = new BookingFloridaBeach(req.body);
	new_booking.save(function(err, booking) {
		if (err)
			res.send(err);
		res.status(201).json(booking);
	});
};

exports.list_bookings_oasi = function(req, res) {
	BookingOasi.find({}, function(err, booking) {
		if (err)
			res.send(err);
		res.json(booking);
	});
};

exports.create_booking_oasi = function(req, res) {
	var new_booking = new BookingOasi(req.body);
	new_booking.save(function(err, booking) {
		if (err)
			res.send(err);
		res.status(201).json(booking);
	});
};

exports.list_bookings_mexico = function(req, res) {
	BookingMexico.find({}, function(err, booking) {
		if (err)
			res.send(err);
		res.json(booking);
	});
};

exports.create_booking_mexico = function(req, res) {
	var new_booking = new BookingMexico(req.body);
	new_booking.save(function(err, booking) {
		if (err)
			res.send(err);
		res.status(201).json(booking);
	});
};

