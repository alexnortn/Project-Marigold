

"use strict";

let express = require('express'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
	runtime = require('pug-runtime'),
    path = require('path'),
    http = require('http');

let routes = require('./routes/index');
let users = require('./routes/users');

let app = express();

// All environments
var PORT = process.env.PORT || 9001;

app.set('port', PORT);

// // Define custom template engine
// app.engine('js', function (filePath, options, callback) {
//   let data = require(filePath)(options, pug);
//   callback(null, data);
// });

// view engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // What is this pointing towards?

app.use('/', routes);
app.use('/users', users);

http.createServer(app).listen(app.get('port'), function(){
  console.log('666 Summenor Listening on port ' + app.get('port'));
});

module.exports = app;
