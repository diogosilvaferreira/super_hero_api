const   chalk = require('chalk')
      , errorColor = chalk.bold.red
      , configSendMail = require("../helpers/send_mail.js")
      , modelQuery = require("../models/super_power.js")
      , permission = require("../helpers/checkPermission.js")
      ;

module.exports = app => {
  let execute_query = app.helpers.execute_query;
  let SuperHeroController = {

    createSuperPower: (req, res) => {
      let chekPermission = permission.checkPermission(req).toLowerCase();
      if (chekPermission === "admin") {

        const name = req.body.name,
              description = req.body.description,
              uuid_superhero = req.body.uuid_superhero;

        let query = modelQuery.CreateSuperPower(name, description, uuid_superhero);
        execute_query.executeQueryBD(query).then(rows => {
            res.json({ result: rows });
        }).catch(err => res.sendStatus(412));

      } else {
        res.sendStatus(403)
      }
    },

    readSuperPower: (req, res) => {
      let query = modelQuery.ReadSuperPower();
      execute_query.executeQueryBD(query).then(rows => {
          res.json({ result: rows });
      }).catch(err => res.sendStatus(412));
    },

    readByIdSuperPower: (req, res) => {
      const uuid = req.params.uuid;

      let query = modelQuery.ReadByIdSuperPower(uuid);
      execute_query.executeQueryBD(query).then(rows => {
          res.json({ result: rows });
      }).catch(err => res.sendStatus(412));
    },

    updateSuperPower: (req, res) => {
      let chekPermission = permission.checkPermission(req).toLowerCase();
      if (chekPermission === "admin") {

        const uuid = req.body.uuid,
              name = req.body.name,
              description = req.body.description,
              uuid_superhero = req.body.uuid_superhero;

        let query = modelQuery.UpdateSuperPower(uuid, name, description, uuid_superhero);
        execute_query.executeQueryBD(query).then(rows => {
            res.json({ result: rows });
        }).catch(err => res.sendStatus(412));

      } else {
        res.sendStatus(403)
      }
    },

    deleteSuperPower: (req, res) => {
      let chekPermission = permission.checkPermission(req).toLowerCase();
      if (chekPermission === "admin") {

        const uuid = req.body.uuid;
        let query = modelQuery.DeleteSuperPower(uuid);
        execute_query.executeQueryBD(query).then(rows => {
            res.json({ result: rows });
        }).catch(err => res.sendStatus(412));

      } else {
        res.sendStatus(403)
      }
    }

  };

  return SuperHeroController;
};