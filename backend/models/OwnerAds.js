
const mongoose = require("mongoose");

const ownerAdsSchema = new mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Owner',
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

const OwnerAds = mongoose.model("OwnerAds", ownerAdsSchema);

module.exports = OwnerAds