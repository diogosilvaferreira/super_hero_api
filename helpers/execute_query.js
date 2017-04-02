const chalk = require('chalk'),
      errorColor = chalk.bold.red,
      configSendMail = require("../helpers/send_mail.js");

module.exports = app => {

  let ExecuteQuery = {
    executeQueryBD: (query) => {

      try {
        return new Promise(function(resolve, reject) {
          app.db.query(String(query), function (err, rows, fields) {
            if (err) { return reject(err); }
            if (typeof rows !== 'undefined' && rows !== null) {
              console.log("********* executeQuery " + JSON.stringify(rows));
              resolve(rows);
            }
          });
        });
      }
      catch(err) {
        console.log( errorColor("Message: " + err.message) );
        configSendMail.handleError(err, "executeQueryBD ", null);
      }
    }
  };

  return ExecuteQuery;
};