const express = require('express'),
      consign = require('consign'),
      app = express();
      
consign({verbose: true})
  .include("libs/config.js")
  .then("db.js")
  .then("models")
  .then("middlewares/auth.js")
  .then("middlewares/middlewares.js")
  .then("helpers")
  .then("controllers")
  .then("routes")
  .then("libs/boot.js")
  .into(app);

module.exports = app;