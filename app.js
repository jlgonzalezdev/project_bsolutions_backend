var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//Model
require('./models/taskModel.js');


var indexRouter = require('./routes/index');
var tasksRouter = require('./routes/task');

var app = express();
//Handling DB
const options = {
  server: {
    reconnectTries: 100,
    reconnectInterval: 5000
  }
};
var dbUrl = 'mongodb://root:root123@ds235431.mlab.com:35431/todolist_bertoni';

mongoose.connect(dbUrl, options);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

//app.use('/', indexRouter);


app.use('/tasks', tasksRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
 });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
