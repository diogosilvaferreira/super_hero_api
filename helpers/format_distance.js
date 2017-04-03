const chalk = require('chalk'),
      errorColor = chalk.bold.red,
      configSendMail = require("../helpers/send_mail.js");

module.exports = app => {

  let FormatDistance = {
    formatDistance: (value, callbackQuery) => {
      let valeuKMandM = Number(value),
          numberFormat = valeuKMandM.toLocaleString('de-DE', {maximumSignificantDigits: 3});
          
      if (numberFormat.indexOf("0.") === 0) {
        let valueMFormated = numberFormat.toString().split(".")[1];
        callbackQuery(parseInt(valueMFormated, "10") + ' m');
      } else {
        callbackQuery(numberFormat + ' km');
      }
    }
  };

   return FormatDistance;
 };