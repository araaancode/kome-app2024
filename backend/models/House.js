const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');

const reviewSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
)

const houseSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: 'Owner',
        required: true,
    },

    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },

    name: {
        type: String,
        required: [true, 'Please tell bus name!'],
        trim: true,
        maxlength: [25, 'A bus name must have less or equal then 25 characters'],
        minlength: [6, 'A bus name must have more or equal then 6 characters'],
        unique: true
    },

    province: {
        type: String,
        trim: true,
        required: true,
    },

    city: {
        type: String,
        trim: true,
        required: true,
    },

    postalCode: {
        type: String,
    },

    housePhone: {
        type: String,
    },

    meters: {
        type: Number,
    },

    description: {
        type: String,
    },

    year: {
        type: Number,
    },

    capacity: {
        type: Number,
    },

    startDay: {
        type: Date,
    },

    endDay: {
        type: Date,
    },

    cover: {
        type: String,
    },

    images: [{ type: String }],

    houseRoles: {
        type: String,
    },

    critrias: {
        type: String,
    },

    houseType: {
        type: String,
        enum: ["cottage", "apartment", "garden", "villa", "room"]
    },

    checkIn: Number,
    checkOut: Number,

    lat: {
        type: String
    },

    lng: {
        type: String
    },

    floor: {
        type: String,
    },

    options: [{
        type: String,
    }],

    heating: {
        type: Boolean,
        default:false
    },

    cooling: {
        type: Boolean,
        default:false
    },

    parking: {
        type: Boolean,
        default:false
    },

    bill: {
        type: String,
    },

    price: {
        type: String,
    },

    address: {
        type: String,
    },

    houseNumber: {
        type: String,
    },

    hobbies: [{
        type: String,
    }],

    enviornment: {
        type: String,
    },

    ownerType: {
        type: String,
    },

    isActive: {
        type: Boolean,
        default: true,
        required: true
    },
    reviews: [reviewSchema],
}, { timestamps: true });


const House = mongoose.model('House', houseSchema);

module.exports = House;