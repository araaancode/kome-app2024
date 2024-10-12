const mongoose = require('mongoose');

const orderFoodSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        foods: [
            {
                food: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Food',
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                    default: 1,
                },
            },
        ],
   
        totalPrice: {
            type: Number,
            required: true,
        },
        orderStatus: {
            type: String,
            enum: ['Pending', 'Preparing', 'Completed', 'Cancelled'],
            default: 'Pending',
        },
        address: {
            type: String,
            required: true,
        },
        // paymentMethod: {
        //     type: String,
        //     enum: ['Cash', 'Card', 'Online'],
        //     required: true,
        // },
    }, { timestamps: true }
);

const OrderFood = mongoose.model("OrderFood", orderFoodSchema);


module.exports = OrderFood