const bodyParser = require('body-parser')
    , express = require('express')
    , morgan = require('morgan')
    , cors = require('cors')
    , compression = require('compression')
    , helmet = require('helmet')
    , logger = require('../libs/logger.js')
    , configSendMail = require("../helpers/send_mail.js")
    ;

module.exports = app => {
  const   ipaddress = "localhost"
        , ipclient = "http://localhost:4000"
        , port = process.env.PORT || 3000
        ;

  app.set("port", port);
  app.set("ipaddress", ipaddress);
  app.set("json spaces", 4);
  
  app.use(morgan("combined", {
    stream: {
      write: (message) => {
        app.controllers.audit.createAudit(message);
        logger.info(message);
      }
    }
  }));
  
  //security
  app.use(helmet());
  app.use(cors({
    origin: [ipclient],
    methods: ["GET", "HEAD", "PATCH", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "authorization"]
  }));
  
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(app.middlewares.auth.initialize());

  // error handler
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
    configSendMail.handleError(err, "/middleware ", res);
  });

  app.use((req, res, next) => {
    delete req.body.id;
    next();
  });

  app.use(express.static("./public/apidoc"));
};