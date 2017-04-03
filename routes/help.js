module.exports = app => {
  const help = app.controllers.help;
  /**
  * @api {get} /help
  * @apiGroup Help
  * @apiSuccessExample {json} Success
  *    HTTP/1.1 200 OK
  *      {
  *        "result": [
  *          {
  *            "name_hero": "Batman",
  *            "alias_hero": "Bruce Wayne",
  *            "area_hero": "Gotham",
  *            "namepower": "x-rayvision",
  *            "dscpower": "superpower x-rayvision loren",
  *            "distance": "7.52 km"
  *          }
  *        ]
  *      }
  * @apiErrorExample {json} Find error
  *    HTTP/1.1 412 Precondition Failed
  */
  app.get('/help', help.readHelp);
}