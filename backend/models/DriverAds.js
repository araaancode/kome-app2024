
const mongoose = require("mongoose");

const driverAdsSchema = new mongoose.Schema(
    {
        driver: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Driver',
            required: true,
        },
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: String,
        description: String,
        price: Number,
        photo: String,
        photos: [
            {
                type: String
            }
        ],
        isActive: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true });

const DriverAds = mongoose.model("DriverAds", driverAdsSchema);

module.exports = DriverAds