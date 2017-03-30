const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'build')));

// Delete before production
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var apiRoutes = require('./routing/api')

app.use('/api/', apiRoutes);

app.get('/*', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.use(function(err, req, res, next) {
  console.log(err);
})

let sendMail = require('./sendMail')

sendMail.newMail('rostyslav.rozhko@gmail.com', {
  title: 'mail-test',
  html: 'asddsa'
})


module.exports = app;
