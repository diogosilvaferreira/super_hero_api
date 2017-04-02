const   chalk = require('chalk')
      , errorColor = chalk.bold.red
      , configSendMail = require("../helpers/send_mail.js")
      , modelQuery = require("../models/audit.js")
      ;

module.exports = app => {
  let execute_query = app.helpers.execute_query;

  let AuditController = {
    createAudit: (message) => {
      let query = modelQuery.CreateAudit(message);
      execute_query.executeQueryBD(query).then(rows => {
        //console.log(rows);
        //configSendMail.handleError(rows, "AuditController ", null);
      }).catch(err => console.error(err));
    }
  };

  return AuditController;
};