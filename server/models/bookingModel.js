const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
        dataInizio: {
            type: String,
            required:true
        },
        dataFine: {
            type: String,
            required:true
        },
        fila: {
            type: String,
            required:true
        },
        postazione: {
            type: String,
            required:true
        },
    })

const bookingModel= mongoose.model('bookings', bookingSchema)
module.exports = bookingModel

