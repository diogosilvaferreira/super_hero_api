module.exports = app => {
  const user = app.controllers.users;
  /**
  * @api {post} /users Register a new user
  * @apiGroup User
  * @apiParam {String} username User username
  * @apiParam {String} password User password
  * @apiParamExample {json} Input
  *    {
  *      "username": "diogosilva",
  *      "password": "123456"
  *    }
  * @apiSuccess {Char} uuid User uuid
  * @apiSuccess {String} username User username
  * @apiSuccess {String} password User encrypted password
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
  app.post('/user', user.createUser);

  /**
  * @api {get} /users List users - requires authentication
  * @apiGroup User
  * @apiHeader {String} Authorization Token of authenticated user
  * @apiHeaderExample {json} Header
  *    {"authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImRpb2dvdGVzdCJ9.123456"}
  * @apiSuccess {String} username User username
  * @apiSuccessExample {json} Success
  *    HTTP/1.1 200 OK
  *    {
  *      "result": [
  *        {
  *          "uuid": "00f2dad1-9397-11e6-b465-124bd2e1e6ad",
  *          "username": "diogosilva"
  *          "Role": "Admin"
  *        },
  *        {
  *          "uuid": "e12f4aee-1701-11e7-90f1-fec3d6e70254",
  *          "username": "diogotest"
  *          "Role": "Standard"
  *        }
  *      ]
  *    }
  * @apiErrorExample {json} Find error
  *    HTTP/1.1 412 Precondition Failed
  */
  app.get('/user', app.middlewares.auth.authenticate(), user.readUser);

  /**
  * @api {put} /users Update - requires authentication
  * @apiGroup User
  * @apiHeader {String} Authorization Token of authenticated user
  * @apiHeaderExample {json} Header
  *    {"authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImRpb2dvdGVzdCJ9.123456"}
  * @apiParam {String} username User username
  * @apiParam {String} password User password
  * @apiParamExample {json} Input
  *    {
  *      "username": "diogosilva",
  *      "password": "123456"
  *    }
  * @apiSuccess {Char} uuid User uuid
  * @apiSuccess {String} username User username
  * @apiSuccess {String} password User encrypted password
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
  app.put('/user', app.middlewares.auth.authenticate(), user.updateUser);

  /**
  * @api {delete} /users Deletes - requires authentication
  * @apiGroup User
  * @apiHeader {String} Authorization Token of authenticated user
  * @apiHeaderExample {json} Header
  *    {"authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImRpb2dvdGVzdCJ9.123456"}
  * @apiParam {String} username User username
  * @apiParamExample {json} Input
  *    {
  *      "uuid": "d9a8871e-1714-11e7-90f1-fec3d6e70254",
  *      "username": "diogosilva",
  *    }
  * @apiSuccess {String} username User username
  * @apiSuccess {String} uuid User uuid
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
  app.delete('/user', app.middlewares.auth.authenticate(), user.deleteUser);
}


