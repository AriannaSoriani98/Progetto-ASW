module.exports = function(app) {
    var bookingController = require('../controllers/bookingController');

    app.route('/api/booking')
        .get(bookingController.list_booking)
        .post(bookingController.create_booking);


    app.route('/api/booking/:id')
        .get(bookingController.read_booking)
        .put(bookingController.update_booking)
        .delete(bookingController.delete_booking);
};
