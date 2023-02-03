module.exports = function(mongoose) {
    var Schema = mongoose.Schema;
    var BookingAlbatrosSchema = new Schema({
        dataInizio: Date,
        dataFine: Date,
        fila: Number,
        postazione: Number,
        nomeBagno: String,
    });
    return mongoose.model('BookingAlbatros', BookingAlbatrosSchema);
};
