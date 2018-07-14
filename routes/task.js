var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Task = mongoose.model('Task');



router.get('/all', function (req, res, next) {
  Task.find({},(err, response) => {
    if (err) {
      res.status(420).json({ success: false });
    } else {
      res.json({ tasks: response });
    }
  });

});

router.post('/insert', function (req, res, next) {
  task = req.body;
  var t = new Task(task);
  t.save(err => {
    if (err)
      res.status(420).json({ success: false });
    else
      res.status(200).json({ task: t });
  });

});

router.put('/update', function (req, res, next) {
  task = req.body;
  Task.findByIdAndUpdate(task._id, task, (err, response) => {
    if (err)
      res.status(420).json({ success: false });
    else
      res.status(200).json({ result: 'ok' });
  });
});

router.delete('/delete/:task', function (req, res, next) {
  taskId = req.params.task;
  Task.findByIdAndRemove(taskId, (err, response) => {
    if (err)
     res.status(420).json({ success: false });
    else
      res.status(200).json({ result: 'ok' });
  });
});

module.exports = router;
