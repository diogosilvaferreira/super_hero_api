"use strict";
const chalk = require('chalk'),
      errorColor = chalk.bold.red,
      configSendMail = require("../helpers/send_mail.js");

module.exports = app => {

  let FormatDistance = {
    formatDistance: (value, callbackQuery) => {
      try {

        //console.log("value default " + value);
        
        var valeuKMandM = Number(value),
            numberFormat = valeuKMandM.toLocaleString('de-DE', {maximumSignificantDigits: 3});
        //console.log("FormatDistance value default " + numberFormat);
        
        if (numberFormat.indexOf("0.") === 0) {
          var valueMFormated = numberFormat.toString().split(".")[1];
          //console.log(parseInt(valueMFormated, "10") + ' m');
          callbackQuery(parseInt(valueMFormated, "10") + ' m');
        } else {
          //console.log(numberFormat + ' km');
          callbackQuery(numberFormat + ' km');
        }
        
      }// try
      catch(err) {
        console.log( errorColor("Message: " + err.message) );
        configSendMail.handleError(err, "formatDistance ", null);
      }
    }
  };

   return FormatDistance;
 };