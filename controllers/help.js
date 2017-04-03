const   chalk = require('chalk')
      , errorColor = chalk.bold.red
      , configSendMail = require("../helpers/send_mail.js")
      , modelQuery = require("../models/help.js")
      , crypto = require("../helpers/crypto.js")
      , permission = require("../helpers/checkPermission.js")
      ;

module.exports = app => {
  let execute_query = app.helpers.execute_query,
      format_distance = app.helpers.format_distance;

  let HelpController = {

    readHelp: (req, res) => {
      const latitude = req.query.latitude,
            longitude = req.query.longitude;

      let query = modelQuery.ReadHelp(latitude, longitude);
      execute_query.executeQueryBD(query).then(rows => {

        var userJson = [];
        for (let j in rows) {
          let row = rows[j];
          format_distance.formatDistance(row.distance, (callbackQuery) => {
            row.distance = callbackQuery;
          });
          userJson.push(row);          
        }

        res.json({ result: userJson });

      }).catch(err => res.sendStatus(412));
    }

  };

  return HelpController;
};