

"use strict";

let express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    http = require('http');

let routes = require('./routes/index');
let users = require('./routes/users');

let app = express();

// all environments
var PORT = process.env.PORT || 3000;

app.set('port', PORT);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

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
