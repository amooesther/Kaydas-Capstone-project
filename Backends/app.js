var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors= require ('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var discountRouter = require('./routes/discount');
var sellerRouter = require('./routes/seller');
var chickenRouter = require('./routes/chicken');
var fishRouter = require('./routes/fish');
var chickenPartRouter = require('./routes/chickenPart');
var wholeRouter = require('./routes/whole');
var wholesaleRouter = require('./routes/wholesale');
var detailsRouter = require('./routes/details');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/discount', discountRouter);
app.use('/seller', sellerRouter);
app.use('/chicken', chickenRouter);
app.use('/fish', fishRouter);
app.use('/chickenPart', chickenPartRouter);
app.use('/whole', wholeRouter);
app.use('/wholesale', wholesaleRouter);
app.use('/details', detailsRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
