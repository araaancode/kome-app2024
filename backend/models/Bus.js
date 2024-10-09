const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');

const busSchema = new mongoose.Schema({
    driver: {
        type: mongoose.Schema.ObjectId,
        ref: 'Driver',
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: [true, 'Please tell bus name!'],
        trim: true,
        maxlength: [25, 'A bus name must have less or equal then 25 characters'],
        minlength: [6, 'A bus name must have more or equal then 6 characters']
    },
    description: {
        type: String,
        required: [true, 'Please provide bus description'],
        trim: true,
    },
    model: {
        type: String,
        required: [true, 'Please provide bus model'],
        trim: true,
    },
    color: {
        type: String,
        trim: true,
    },
    type: {
        type: String,
        trim: true,
    },
    licensePlate: {
        type: String,
        trim: true,
    },
    serviceProvider: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
    },
    capacity:{
        type: Number,
        default: 10
    },
    seats:{
        type: Number,
        default: 10
    },
    photo: String,
    photos: [{ type: String }],
    active: {
        type: Boolean,
        default: false,
        required: true
    },
    options: [
        { type: String }
    ]
},{ timestamps: true });


const Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;