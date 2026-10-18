const express = require('express');
var createError = require('http-errors');
var logger = require('morgan');
var cors = require('cors');

// Import routers
var indexRouter = require('../app/routers/indexRouter.js');
var referencesRouter = require('../app/routers/referencesRouter.js');
var projectsRouter = require('../app/routers/projectsRouter.js');
var servicesRouter = require('../app/routers/servicesRouter.js');
var usersRouter = require('../app/routers/usersRouter.js');

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', indexRouter);
app.use('/api/references', referencesRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/services', servicesRouter);
app.use('/api/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  // render the error json
  res.status(err.status || 500);
  res.json(
    {
      success: false,
      message: err.message
    }
  );
});

module.exports = app;