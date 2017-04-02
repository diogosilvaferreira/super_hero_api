const mysql = require('mysql'),
      moment = require('moment');
let dateNow = moment().format();

module.exports = app => {
  
  const config = app.libs.config;
  const db = mysql.createConnection({
    multipleStatements: true,
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    port: config.port,
    debug: false
  });

  db.connect();

  return db;
}; 
