module.exports = app => {
  const audit = app.controllers.audit;
  /**
  * @api {get} /audit - requires authentication and Admin
  * @apiGroup Audit
  * @apiSuccessExample {json} Success
  *    HTTP/1.1 200 OK
  *      {
  *      "result": [
  *        {
  *          "uuid": "1b6bd28e-17f9-11e7-81b2-f89b20cea8e0",
  *          "entity": "127.0.0.1 - - [02/Apr/2017:23:07:13 +0000] GET /audit HTTP/1.1 403 9 - Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36\n",
  *          "datetime": "2017-04-02T23:07:13.000Z",
  *          "username": "NULL",
  *          "action": "NULL"
  *        }
  *      ]
  *    }
  * @apiErrorExample {json} Find error
  *    HTTP/1.1 412 Precondition Failed
  */
  app.get('/audit', audit.readAudit);
}