const   chalk = require('chalk')
      , errorColor = chalk.bold.red
      , configSendMail = require("../helpers/send_mail.js")
      , modelQuery = require("../models/users.js")
      , crypto = require("../helpers/crypto.js")
      , permission = require("../helpers/checkPermission.js")
      ;

module.exports = app => {
  let execute_query = app.helpers.execute_query;

  let UserController = {

    createUser: (req, res) => {
      const username = req.body.username;
      const password = req.body.password;

      let query = modelQuery.CreateUser(username, password);
      execute_query.executeQueryBD(query).then(rows => {
          res.json({ result: rows });
      }).catch(err => res.sendStatus(412));
    },

    readUser: (req, res) => {
      let chekPermission = permission.checkPermission(req).toLowerCase();
      if (chekPermission === "admin") {

        let query = modelQuery.ReadUser();
        execute_query.executeQueryBD(query).then(rows => {
            res.json({ result: rows });
        }).catch(err => res.sendStatus(412));
      
      } else {
        res.sendStatus(403)
      }
    },

    updateUser: (req, res) => {
      let chekPermission = permission.checkPermission(req).toLowerCase();
      if (chekPermission === "admin") {

        const username = req.body.username;
        const password = req.body.password;

        let query = modelQuery.UpdateUser(username, password);
        execute_query.executeQueryBD(query).then(rows => {
            res.json({ result: rows });
        }).catch(err => res.sendStatus(412));

      } else {
        res.sendStatus(403)
      }
    },

    deleteUser: (req, res) => {
      let chekPermission = permission.checkPermission(req).toLowerCase();
      if (chekPermission === "admin") {

        const username = req.body.username;
        const uuid = req.body.uuid;
        
        let query = modelQuery.DeleteUser(username, uuid);
        execute_query.executeQueryBD(query).then(rows => {
            res.json({ result: rows });
        }).catch(err => res.sendStatus(412));

      } else {
        res.sendStatus(403)
      }
    }

  };

  return UserController;
};