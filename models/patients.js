const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  tasks: [{
    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
    date: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['assigned', 'completed'],
      default: 'assigned',
    },
  }],
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;