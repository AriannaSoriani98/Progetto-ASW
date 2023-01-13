module.exports = function(mongoose) {
    var Schema = mongoose.Schema;
    var PrenotazioneSchema = new Schema({
        dataInizio: Date,
        dataFine: Date,
        fila: Number,
        ombrellone: Number,
    });
    return mongoose.model('Prenotazione', PrenotazioneSchema);
};
