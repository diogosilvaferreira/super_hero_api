const   fs = require('fs')
      , winston = require('winston')
      , logDir = "logs"
      ;

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

module.exports = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: "info",
      filename: logDir + "/app.log",
      maxsize: 1048576,
      maxFiles: 10,
      colorize: false
    }),
    new (winston.transports.File)({
      name: 'error-file',
      filename: logDir + "/app-error.log",
      level: 'error'
    })
  ]
});
