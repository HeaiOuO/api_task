const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/tasks_api';
mongoose.connect(connectionString, { useNewUrlParser: true })
  .catch(err => console.log(err));

const TaskSchema = new mongoose.Schema({
  title: String,
  description: {
    type: String,
    default: ''
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {timestamps:true});

module.exports = mongoose.model('Task', TaskSchema);