const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const app = express();
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var config = require('./config'); // get our config file
var User   = require('./models/User'); // get our mongoose model
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
//mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable

//connect to MongoDB
mongoose.connect('mongodb://root:password@ds155695.mlab.com:55695/pradnyavardhini_app', {useMongoClient:true});
var db = mongoose.connection;
// setup view engine
app.set('view engine', 'ejs');
//use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));
// setup middlewares
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/catalog', require('./routes/catalog'));
app.use('/api', require('./routes/api'));
app.use(require('./routes/login'));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});
// error handler define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});


// start app
app.listen(process.env.PORT || 3517, () => {
    console.log("listening to port 3517");
});


