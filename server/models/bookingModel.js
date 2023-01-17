module.exports = function(mongoose) {
    var Schema = mongoose.Schema;
    var BookingSchema = new Schema({
        dataInizio: Date,
        dataFine: Date,
        fila: Number,
        ombrellone: Number,
    });
    return mongoose.model('Booking', BookingSchema);
};
