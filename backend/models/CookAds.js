
const mongoose = require("mongoose");

const cookAdsSchema = new mongoose.Schema(
    {
        cook: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cook',
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

const CookAds = mongoose.model("CookAds", cookAdsSchema);

module.exports = CookAds