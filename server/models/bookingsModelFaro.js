module.exports = function(mongoose) {
    var Schema = mongoose.Schema;
    var BookingFaroSchema = new Schema({
        dataInizio: Date,
        dataFine: Date,
        fila: Number,
        postazione: Number,
        nomeBagno: String,
    });
    return mongoose.model('BookingFaro', BookingFaroSchema);
};
