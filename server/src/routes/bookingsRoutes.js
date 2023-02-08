module.exports = function(app) {
	var bookingsController = require('../controllers/bookingsController');

	app.route('/api/bookingsAlbatros')
		.get(bookingsController.list_bookings_albatros)
		.post(bookingsController.create_booking_albatros);

	app.route('/api/bookingsAlbatros/:id')
		.delete(bookingsController.delete_Albatros);

	app.route('/api/bookingsHakunaMatata')
		.get(bookingsController.list_bookings_hakunamatata)
		.post(bookingsController.create_booking_hakunamatata);

	app.route('/api/bookingsFaro')
		.get(bookingsController.list_bookings_faro)
		.post(bookingsController.create_booking_faro);

	app.route('/api/bookingsMarrakech')
		.get(bookingsController.list_bookings_marrakech)
		.post(bookingsController.create_booking_marrakech);

	app.route('/api/bookingsGranchio')
		.get(bookingsController.list_bookings_granchio)
		.post(bookingsController.create_booking_granchio);

	app.route('/api/bookingsFloridaBeach')
		.get(bookingsController.list_bookings_floridabeach)
		.post(bookingsController.create_booking_floridabeach);

	app.route('/api/bookingsOasi')
		.get(bookingsController.list_bookings_oasi)
		.post(bookingsController.create_booking_oasi);

	app.route('/api/bookingsMexico')
		.get(bookingsController.list_bookings_mexico)
		.post(bookingsController.create_booking_mexico);

};
