const   chalk = require('chalk')
      , errorColor = chalk.bold.red
      , configSendMail = require("../helpers/send_mail.js")
      , modelQuery = require("../models/token.js")
      , jwt = require('jwt-simple')
      , crypto = require("../helpers/crypto.js")
      ;

module.exports = app => {
  const cfg = app.libs.config;
  let execute_query = app.helpers.execute_query;

  let TokenController = {

    generate: (req, res) => {
      if (req.body.username && req.body.password) {
        const username = req.body.username;
        const password = req.body.password;
        const uuid = req.body.uuid;

        let query = modelQuery.SelectAuth(uuid);

        execute_query.executeQueryBD(query).then(rows => {

          let isPassword = crypto.decrypt(rows[0].password);
          if (isPassword == password) {
            const payload = {id: rows[0].uuid, role: rows[0].role};
            res.json({ token: jwt.encode(payload, cfg.jwtSecret) });
          } else {
            res.sendStatus(401);
          }
        }).catch(err => res.sendStatus(401));

      } else {
        res.sendStatus(401);
      }

    }
  };

  return TokenController;
};