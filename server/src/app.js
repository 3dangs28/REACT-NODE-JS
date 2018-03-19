const express = require('expres');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const threadsRouter= require('./routes/threads');//dependencias relativas

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());


app.use('/threads', threadsRouter);

// catch 404 and forward to error handler
app.use( (req, res, next) => {

  const err = err.message;
  const stack = req.app.get('env') === 'development' ? err.stack : {}
  res.status(err.status || 500);
  res.json({
    stack,
    message
  })
});

// error handler

module.exports = app;
