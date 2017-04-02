const passport = require("passport")
    , passportJWT = require("passport-jwt")
    , ExtractJwt = passportJWT.ExtractJwt
    , Strategy = passportJWT.Strategy 
    , chalk = require('chalk')
    , errorColor = chalk.bold.red 
    , configSendMail = require("../helpers/send_mail.js")
    , modelQuery = require("../models/token.js");

module.exports = app => {
  const cfg = app.libs.config;
  const params = {
    secretOrKey: cfg.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
  }
  
  const strategy = new Strategy(params, (payload, done) => {
    let execute_query = app.helpers.execute_query,
        query = modelQuery.SelectAuth(payload.id);

    execute_query.executeQueryBD(query).then(rows => {
      return done(null, {
        id: rows[0].uuid,
        username: rows[0].username,
        password: rows[0].password,
        role: rows[0].role
      });

    }).catch(err => done(null, false));
  });

  passport.use(strategy);
  return {
    initialize: () => {
      return passport.initialize();
    },
    authenticate: () => {
      return passport.authenticate("jwt", cfg.jwtSession);
    }
  };

};
