const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var login = 'admin'
var password = 'admin';
var uri = `mongodb://${login}:${password}@ds135820.mlab.com:35820/soundcloud`;
mongoose.connect(uri);

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + uri);
});

mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

module.exports = mongoose;
