var mongoose = require('mongoose');
Booking = require("../models/bookingModel.js")(mongoose);

exports.getallBooking = async(req, res) => {
    try{
        const bookings = await Booking.find({})
        return res.json({ bookings })
    } catch (error) {
        return res.status(400).json({message: error})
    }
};
