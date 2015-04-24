// modules =================================================
var express        = require('express');
var app            = express();
var port = process.env.PORT || 8080;

var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');



// configuration ===========================================
    
// config files
//var db = require('./config/db');

// connect to our mongoDB database
var db = process.env.MONGOLAB_URI || 'mongodb://localhost/howaboutarace';
mongoose.connect(db);

require('./config/passport')(passport);  // pass passport for configuration

// setup express ============================================
// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(morgan('dev'));   // log every request to the console
app.use(cookieParser());  // read cookies (needed for auth)
app.use(bodyParser.json());   // get info from html forms

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 


app.use(session({secret: 'letsrace'})); // session secret
app.use(passport.initialize());
app.use(passport.session())  // persistent log sessions
app.use(flash());  //use connect-flash for flash messages stored in session

// routes ==================================================
require('./app/routes')(app, passport); // configure our routes


// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;  
