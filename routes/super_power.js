module.exports = app => {
  const super_power = app.controllers.super_power;
  /**
  * @api {post} /super_power Register a new Super Power
  * @apiGroup Super Power
  * @apiHeader {String} Authorization Token of authenticated user
  * @apiHeaderExample {json} Header
  *    {"authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImRpb2dvdGVzdCJ9.123456"}
  * @apiParam {String} name Super Power name
  * @apiParam {String} description Super Hero description
  * @apiParamExample {json} Input
  *    {
  *      "name": "x-rayvision",
  *      "description": "superpower x-rayvision loren"
  *    }
  * @apiSuccess {Char} uuid Super Power uuid
  * @apiSuccess {String} name Super Power name
  * @apiSuccess {String} description Super Power description
  * @apiSuccessExample {json} Success
  *    HTTP/1.1 200 OK
  *    {
  *      "result": {
  *        "fieldCount": 0,
  *        "affectedRows": 1,
  *        "insertId": 0,
  *        "serverStatus": 2,
  *        "warningCount": 0,
  *        "message": "",
  *        "protocol41": true,
  *        "changedRows": 0
  *      }
  *    }
  * @apiErrorExample {json} Find error
  *    HTTP/1.1 412 Precondition Failed
  */
  app.post('/super_power', app.middlewares.auth.authenticate(), super_power.createSuperPower);

  /**
  * @api {get} /super_power List super_power - requires authentication
  * @apiGroup Super Power
  * @apiHeader {String} Authorization Token of authenticated user
  * @apiHeaderExample {json} Header
  *    {"authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImRpb2dvdGVzdCJ9.123456"}
  * @apiSuccessExample {json} Success
  *    HTTP/1.1 200 OK
  *     {
  *       "result": [
  *          {
  *            "uuid": "5af61c00-171f-11e7-90f1-fec3d6e70254",
  *            "name": "x-rayvision",
  *            "description": "superpower x-rayvision loren",
  *            "SuperHero_uuid": "c5bc51f2-171b-11e7-90f1-fec3d6e70254"
  *          }
  *        ]
  *     }
  * @apiErrorExample {json} Find error
  *    HTTP/1.1 412 Precondition Failed
  */
  app.get('/super_power', app.middlewares.auth.authenticate(), super_power.readSuperPower);

  /**
  * @api {get} /super_power/:uuid View single SuperPower - requires authentication
  * @apiGroup Super Power
  * @apiHeader {String} Authorization Token of authenticated user
  * @apiHeaderExample {json} Header
  *    {"authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImRpb2dvdGVzdCJ9.123456"}
  * @apiSuccessExample {json} Success
  *    HTTP/1.1 200 OK
  *   {
  *    "result": [
  *      {
  *        "uuid": "5fd9ef30-1715-11e7-90f1-fec3d6e70254",
  *        "name": "Batman",
  *        "alias": "Bruce Wayne",
  *        "area": "Gotham",
  *        "location": "POINT(-23.56823032684731 -46.64500329741625)"
  *      }
  *     ]
  *   }
  * @apiErrorExample {json} Find error
  *    HTTP/1.1 412 Precondition Failed
  */
  app.get('/super_power/:uuid', app.middlewares.auth.authenticate(), super_power.readByIdSuperPower);

  /**
  * @api {put} /super_power Update - requires authentication
  * @apiGroup Super Power
  * @apiHeader {String} Authorization Token of authenticated user
  * @apiHeaderExample {json} Header
  *    {"authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImRpb2dvdGVzdCJ9.123456"}
  * @apiParam {String} uuid Super Power uuid
  * @apiParam {String} name Super Power name
  * @apiParam {String} alias Super Power alias
  * @apiParam {geopoint} latitude Super Power latitude
  * @apiParam {geopoint} longitude Super Power longitude
  * @apiParamExample {json} Input
  *    {
  *      "uuid": "5fd9ef30-1715-11e7-90f1-fec3d6e70254",
  *      "name": "Batman",
  *      "alias": "Bruce Wayne"
  *      "latitude": "-23.56823032684731"
  *      "longitude": "-46.64500329741625"
  *    }
  * @apiSuccess {Char} uuid Super Power uuid
  * @apiSuccess {String} name Super Power name
  * @apiSuccess {String} alias Super Power alias
  * @apiSuccess {String} area Super Power area
  * @apiSuccess {geopoint} latitude Super Power latitude
  * @apiSuccess {geopoint} longitude Super Power longitude
  * @apiSuccessExample {json} Success
  *    HTTP/1.1 200 OK
  *    {
  *      "result": {
  *        "fieldCount": 0,
  *        "affectedRows": 1,
  *        "insertId": 0,
  *        "serverStatus": 34,
  *        "warningCount": 0,
  *        "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
  *        "protocol41": true,
  *        "changedRows": 1
  *      }
  *    }
  * @apiErrorExample {json} Find error
  *    HTTP/1.1 412 Precondition Failed
  */
  app.put('/super_power', app.middlewares.auth.authenticate(), super_power.updateSuperPower);

  /**
  * @api {delete} /super_power Deletes - requires authentication
  * @apiGroup Super Power
  * @apiHeader {String} Authorization Token of authenticated user
  * @apiHeaderExample {json} Header
  *    {"authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImRpb2dvdGVzdCJ9.123456"}
  * @apiParam {String} uuid Super Hero uuid
  * @apiParamExample {json} Input
  *    {
  *      "uuid": "d9a8871e-1714-11e7-90f1-fec3d6e70254",
  *    }
  * @apiSuccess {String} uuid Super Hero uuid
  * @apiSuccessExample {json} Success
  *    HTTP/1.1 200 OK
  *    {
  *      "result": {
  *        "fieldCount": 0,
  *        "affectedRows": 1,
  *        "insertId": 0,
  *        "serverStatus": 34,
  *        "warningCount": 0,
  *        "message": "",
  *        "protocol41": true,
  *        "changedRows": 0
  *      }
  *    }
  * @apiErrorExample {json} Find error
  *    HTTP/1.1 412 Precondition Failed
  */
  app.delete('/super_power', app.middlewares.auth.authenticate(), super_power.deleteSuperPower);
}
