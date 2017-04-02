const   chalk = require('chalk')
      , errorColor = chalk.bold.red
      , configSendMail = require("../helpers/send_mail.js")
      , modelQuery = require("../models/super_hero.js")
      , permission = require("../helpers/checkPermission.js")
      ;

module.exports = app => {
  let execute_query = app.helpers.execute_query;
  let SuperHeroController = {

    createSuperHero: (req, res) => {
      let chekPermission = permission.checkPermission(req).toLowerCase();
      if (chekPermission === "admin") {
        
        const name = req.body.name,
              alias = req.body.alias,
              area = req.body.area,
              latitude = req.body.latitude,
              longitude = req.body.longitude;

        let query = modelQuery.CreateSuperHero(name, alias, area, latitude, longitude);
        execute_query.executeQueryBD(query).then(rows => {
            res.json({ result: rows });
        }).catch(err => res.sendStatus(412));

      } else {
        res.sendStatus(403)
      }
    },

    readSuperHero: (req, res) => {
      let query = modelQuery.ReadSuperHero();
      execute_query.executeQueryBD(query).then(rows => {
          res.json({ result: rows });
      }).catch(err => res.sendStatus(412));
    },

    readByIdSuperHero: (req, res) => {
      const uuid = req.params.uuid;
      let query = modelQuery.ReadByIdSuperHero(uuid);
      execute_query.executeQueryBD(query).then(rows => {
          res.json({ result: rows });
      }).catch(err => res.sendStatus(412));
    },

    updateSuperHero: (req, res) => {
      let chekPermission = permission.checkPermission(req).toLowerCase();
      if (chekPermission === "admin") {

        const uuid = req.body.uuid,
              name = req.body.name,
              alias = req.body.alias,
              area = req.body.area,
              latitude = req.body.latitude,
              longitude = req.body.longitude;

        let query = modelQuery.UpdateSuperHero(uuid, name, alias, area, latitude, longitude);
        execute_query.executeQueryBD(query).then(rows => {
            res.json({ result: rows });
        }).catch(err => res.sendStatus(412));

      } else {
        res.sendStatus(403)
      }
    },

    deleteSuperHero: (req, res) => {
      let chekPermission = permission.checkPermission(req).toLowerCase();
      if (chekPermission === "admin") {

        const uuid = req.body.uuid;
        let query = modelQuery.DeleteSuperHero(uuid);
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