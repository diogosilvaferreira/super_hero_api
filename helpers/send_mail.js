/**
* @{log}
* @Class responsible for sending email when we have an exception
* @Need to create an account in mailgun (https://www.mailgun.com/)
*/

const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

let auth = {
  auth: {
    api_key: 'key-8c1a62115a4fd0d14463e19b4620173455XX',
    domain: 'superhero.com'
  }
}

let nodemailerMailgun = nodemailer.createTransport(mg(auth));

let mailOptions = (msg) => {
  return ({
    from: 'suporte@superhero.com',
    to: 'diogosilvaferreira@gmail.com',
    subject: 'SuperHero API',
    text: msg,
    html: "<b>" + msg + "</b>"
  });
}

let handleError = (err, route, res) => {
  if (err) {
    let msg = `"${route} : ${err.stack}"`;

    nodemailerMailgun.sendMail(mailOptions(msg), function(errorMail, info){
      if(errorMail){ return console.log(errorMail); }
      console.log('Message sent: ' + JSON.stringify(info));
    });

    if (typeof res !== 'undefined' && res !== null && res.length > 0) {
      return res.status(412).json({"error": "Erro no retorno dos dados." });
    }
  }
}

exports.handleError = handleError;
