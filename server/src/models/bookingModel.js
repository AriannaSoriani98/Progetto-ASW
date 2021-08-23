module.exports = function(mongoose) {
    var Schema = mongoose.Schema;
    var BookingSchema = new Schema({
        date_in:  Date, // String is shorthand for {type: String}
        date_out: Date,
        num_umbrellas: Number,
        num_chair: Number,
    });
    return mongoose.model('Booking', BookingSchema);
};
