module.exports = function(app) {
    var reservationController = require('../controllers/bookingController');

    app.route('/api/booking')
        .get(reservationController.list_prenotazioni)
}