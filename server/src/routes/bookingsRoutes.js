module.exports = function(app) {
	var bookingsController = require('../controllers/bookingsController');

	app.route('/api/bookings')
		.get(bookingsController.list_bookings);

};
