var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const User = require('./user');

TaskSchema = new Schema({
	patient_id: String,
	nurse_id: {
		type: String,
		ref: 'User',
		autopopulate: true,
	},
	task_description: String,
	due_date: Date,
	status: {
	  type: String,
	  enum: ['assigned', 'in_progress', 'completed', 'cancelled'],
	  default: 'assigned',
	},
}),

Task = mongoose.model('Task', TaskSchema);

module.exports = Task;