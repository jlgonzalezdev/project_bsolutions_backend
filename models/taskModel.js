var mongoose = require('mongoose'), Schema = mongoose.Schema;

var TaskSchema = new mongoose.Schema({
  taskStr: String,
  isDone: Boolean
});

mongoose.model('Task', TaskSchema);
