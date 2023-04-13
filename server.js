const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
// const Admin = require('react-admin')
// Always require and configure near the top
require('dotenv').config();
// Connect to the database
require('./config/database');

const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

app.use(logger('dev'));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Middleware to check and verify a JWT and
// assign the user object from the JWT to req.user
app.use(require('./config/checkToken'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'SEIRocks!',
  resave: true,
  saveUninitialized: true,
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 3001;

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
const ensureLoggedIn = require('./config/ensureLoggedIn');
const isAdmin = require('./config/auth')
// const { Admin } = require('react-admin');
// app.use('/api/admin', ensureLoggedIn, isAdmin, require('./routes/api/admin'));
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));
const adminRouter = require('./routes/api/admin');

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX/API requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});
