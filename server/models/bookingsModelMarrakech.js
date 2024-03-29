module.exports = function(mongoose) {
    var Schema = mongoose.Schema;
    var BookingMarrakechSchema = new Schema({
        dataInizio: Date,
        dataFine: Date,
        fila: Number,
        postazione: Number,
        nomeBagno: String,
    });
    return mongoose.model('BookingMarrakech', BookingMarrakechSchema);
};
