module.exports = function(mongoose) {
    var Schema = mongoose.Schema;
    var BookingFloridaBeachSchema = new Schema({
        dataInizio: Date,
        dataFine: Date,
        fila: Number,
        postazione: Number,
        nomeBagno: String,
    });
    return mongoose.model('BookingFloridaBeach', BookingFloridaBeachSchema);
};
