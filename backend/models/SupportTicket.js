const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Support Ticket schema
const SupportTicketSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Open', 'In Progress', 'Closed'],
    default: 'Open'
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  assignedTo: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [{
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    comment: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
});

// Middleware to update the `updatedAt` field on save
SupportTicketSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Create the Support Ticket model
const SupportTicket = mongoose.model('SupportTicket', SupportTicketSchema);

module.exports = SupportTicket;