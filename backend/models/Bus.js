const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Bus name is required'],
    trim: true,
  },
  route: {
    type: String,
    required: [true, 'Route is required'],
    trim: true,
  },
  departureTime: {
    type: String,
    required: [true, 'Departure time is required'],
  },
  arrivalTime: {
    type: String,
    required: [true, 'Arrival time is required'],
  },
  capacity: {
    type: Number,
    required: [true, 'Capacity is required'],
    min: [0, 'Capacity cannot be negative'],
  },
  // Add other relevant fields here, e.g., amenities, status, etc.
}, {
  timestamps: true,
});

module.exports = mongoose.model('Bus', busSchema);
