module.exports = function(app) {
    var reservationController = require('../controllers/reservationController');

    app.route('/api/booking')
        .get(reservationController.list_prenotazioni)
}