'use strict';

const co = require('co');
const path = require('path');
const _ = require('lodash');
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const flash = require('connect-flash');

const config = require('./server/config/config');
const appLogger = require('./server/config/logger').appLog;
const dbConn = require('./server/config/dbConn');
const passportConfig = require('./server/config/passport');

co(function* () {
  try {
    let dbConnection = yield dbConn.init();
    passportConfig();

    const app = express();
    if (process.env.NODE_ENV === 'development') {
      app.use(morgan('dev'));
    } else {
      app.use(compression());
    }
    app.use(bodyParser.urlencoded({
      extended: true,
      parameterLimit: 20000,
      limit: 1024 * 1024 * 2
    }));
    app.use(bodyParser.json({
      extended: true,
      parameterLimit: 20000,
      limit: 1024 * 1024 * 2
    }));

    app.use('/static', express.static(path.join(__dirname, 'client/public')));
    var mongoStore = new MongoStore({
      mongooseConnection: dbConnection.connection,
      touchAfter: 24 * 3600, // Updating the session only every 24 hours.
      autoRemove: 'interval',
      autoRemoveInterval: 30 // Removing expired sessions every 30 minutes.
    });

    // Configure the 'session' middleware
    app.use(session({
      name: 'MEVN_STACK_SID',
      saveUninitialized: true,
      resave: false,
      secret: 'mevn-stack-session-secret',
      cookie: {
        maxAge: 1000 * 60 * 60 * 2
      },
      store: mongoStore
    }));

    app.set('views', path.join(__dirname, 'server/views'));
    app.set('view engine', 'server.view.html');
    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    app.get('/', function (req, res) {
      res.send('Hello World');
    })

    app.listen(3000);
    console.log("[Express] Started server with port 3000.");
  } catch (error) {
    console.log(error);
  }
});