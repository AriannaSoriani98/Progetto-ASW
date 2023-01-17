/*
module.exports = function(app) {
    var reservationController = require('../controllers/bookingController');

    app.route('/api/booking')
        .get(reservationController.getallBooking)

}*/
const express = require("express");
const router = express.Router();
var mongoose = require('mongoose');

const Booking = require("../models/bookingModel.js")(mongoose);

router.get("/getAllBooking", async (req,res)=>{
    try{
        const bookings = await Booking.find({})
        return res.json({bookings});
    } catch (error) {
        return res.status(400).json({message:error});
    }
});

module.exports = router;
