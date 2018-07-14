var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Task = mongoose.model('Task');



router.get('/all', function (req, res, next) {
   Task.find((err,response)=>{
    res.json({tasks:response});
  });
  
});
router.post('/insert', function (req, res, next) {
  task = req.body;
  console.log(task);
  var t = new Task(task);
  t.save(err=>{
    if(err){
      console.log(err);
      res.status(400).json({success: false}); 
  }
     else{
      res.status(200).json({task:t}); 
     }
     
  });  
});

router.post('/update', function (req, res, next) {
  task = req.body;
  console.log(task);
  Task.findByIdAndUpdate(task._id,task,(err,response)=>{
    if(err)
      console.log(err);
    else
      console.log(response);
  });  
  res.status(200).json({result:'ok'});
});

router.post('/delete', function (req, res, next) {
  task = req.body;
  console.log(task);
  Task.findByIdAndRemove(task._id,(err,response)=>{
    if(err)
      console.log(err);
    else
      console.log(response);
  }); 
  res.status(200).json({result:'ok'});
});

module.exports = router;
