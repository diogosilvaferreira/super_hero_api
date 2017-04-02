module.exports = app => {
  const super_hero = app.controllers.super_hero;
  /**
  * @api {post} /super_hero Register a new Super Hero
  * @apiGroup Super Hero
  * @apiHeader {String} Authorization Token of authenticated user
  * @apiHeaderExample {json} Header
  *    {"authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImRpb2dvdGVzdCJ9.123456"}
  * @apiParam {String} name Super Hero name
  * @apiParam {String} alias Super Hero alias
  * @apiParamExample {json} Input
  *    {
  *      "name": "Batman",
  *      "alias": "Bruce Wayne"
  *    }
  * @apiSuccess {Char} uuid Super Hero uuid
  * @apiSuccess {String} name Super Hero name
  * @apiSuccess {String} alias Super Hero alias
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
  app.post('/super_hero', app.middlewares.auth.authenticate(), super_hero.createSuperHero);

  /**
  * @api {get} /super_hero List users - requires authentication
  * @apiGroup Super Hero
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
  app.get('/super_hero', app.middlewares.auth.authenticate(), super_hero.readSuperHero);

  /**
  * @api {get} /super_hero/:uuid View single SuperHero - requires authentication
  * @apiGroup Super Hero
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
  app.get('/super_hero/:uuid', app.middlewares.auth.authenticate(), super_hero.readByIdSuperHero);

  /**
  * @api {put} /super_hero Update - requires authentication
  * @apiGroup Super Hero
  * @apiHeader {String} Authorization Token of authenticated user
  * @apiHeaderExample {json} Header
  *    {"authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImRpb2dvdGVzdCJ9.123456"}
  * @apiParam {String} uuid super_hero uuid
  * @apiParam {String} name super_hero name
  * @apiParam {String} alias super_hero alias
  * @apiParam {geopoint} latitude super_hero latitude
  * @apiParam {geopoint} longitude super_hero longitude
  * @apiParamExample {json} Input
  *    {
  *      "uuid": "5fd9ef30-1715-11e7-90f1-fec3d6e70254",
  *      "name": "Batman",
  *      "alias": "Bruce Wayne"
  *      "latitude": "-23.56823032684731"
  *      "longitude": "-46.64500329741625"
  *    }
  * @apiSuccess {Char} uuid super_hero uuid
  * @apiSuccess {String} name super_hero name
  * @apiSuccess {String} alias super_hero alias
  * @apiSuccess {String} area super_hero area
  * @apiSuccess {geopoint} latitude super_hero latitude
  * @apiSuccess {geopoint} longitude super_hero longitude
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
  app.put('/super_hero', app.middlewares.auth.authenticate(), super_hero.updateSuperHero);

  /**
  * @api {delete} /super_hero Deletes - requires authentication
  * @apiGroup Super Hero
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
  app.delete('/super_hero', app.middlewares.auth.authenticate(), super_hero.deleteSuperHero);
}
