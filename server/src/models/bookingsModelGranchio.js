module.exports = function(mongoose) {
    var Schema = mongoose.Schema;
    var BookingGranchioSchema = new Schema({
        dataInizio: Date,
        dataFine: Date,
        fila: Number,
        postazione: Number,
        nomeBagno: String,
    });
    return mongoose.model('BookingGranchio', BookingGranchioSchema);
};
