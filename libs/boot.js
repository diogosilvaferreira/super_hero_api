const   http = require('http')
      , fs = require('fs')
      , moment = require('moment');

let dateNow = moment().format();

module.exports = app => {

  if (process.env.NODE_ENV !== "test") {
    
    const server = require('http').createServer(app);
    server.listen(app.get("port"), app.get("ipaddress"), () => {
      console.log(`Super Hero API - Port ${app.get("port")} - IP ${app.get("ipaddress")} - Data ${dateNow}`);
    });

  }
};
