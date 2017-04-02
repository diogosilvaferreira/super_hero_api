module.exports = app => {
  const token = app.controllers.token;
  /**
  * @api {post} /token Authentication Token
  * @apiGroup Credentials
  * @apiParam {String} username The user must be registered
  * @apiParam {String} password The user must be registered
  * @apiParamExample {json} Input
  *    {
  *      "username": "teste"
  *      "password": "123456"  
  *    }
  * @apiSuccess {String} token Token of authenticated user
  * @apiSuccessExample {json} Success
  *    HTTP/1.1 200 OK
  *    {"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImRpb2dvdGVzdCJ9.123456"}
  * @apiErrorExample {json} Authentication error
  *    HTTP/1.1 401 Unauthorized
  */
  app.post('/token', token.generate);
}