const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');

const busTicketSchema = new mongoose.Schema({
    driver: {
        type: mongoose.Schema.ObjectId,
        ref: 'Driver',
        required: true
    },
    passengers: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        }
    ],
    bus:
    {
        type: mongoose.Schema.ObjectId,
        ref: 'Bus',
        required: true
    },
    user: // ticket owner
    {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    movingDate: {
        type: Date,
        default: Date.now()
    },
    hour: {
        type: Date,
        default: Date.now()
    },
    firstCity: {
        type: String,
        required: true
    },
    lastCity: {
        type: String,
        required: true
    },
    ticketPrice: {
        type: Number,
        required: true
    },
    seatNumbers: [{
        type: Number
    }],
    isCanceled: {
        type: Boolean,
        default: false,
        required: true
    }
}, { timestamps: true });


const BusTicket = mongoose.model('BusTicket', busTicketSchema);

module.exports = BusTicket;