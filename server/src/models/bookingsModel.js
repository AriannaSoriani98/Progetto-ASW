module.exports = function(mongoose) {
    var Schema = mongoose.Schema;
    var BookingSchema = new Schema({
        dataInizio: Date,
        dataFine: Date,
        fila: Number,
        postazione: Number,
    });
    return mongoose.model('Booking', BookingSchema);
};
