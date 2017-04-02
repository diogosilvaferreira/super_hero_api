const   CryptoJS = require("crypto-js")
      , crypto = require('crypto')
      , chalk = require('chalk')
      , errorColor = chalk.bold.red
      ;

let encrypt = (password) => {
  try {
    let passwordSecret = "S#p&@H&r@2017",
        salt = passwordSecret,
        hash = CryptoJS.SHA256(salt),
        key = CryptoJS.PBKDF2(passwordSecret, hash, { keySize: 512/32, iterations: 10 }),
        algorithm = 'aes-256-ctr',
        cipher = crypto.createCipher(algorithm, key.toString(CryptoJS.enc.Base64)),
        crypted = cipher.update(password,'utf8','hex');

    crypted += cipher.final('hex');
    return crypted;

  } catch (err) {
    console.log( errorColor("Message encrypt: " + err.message) );
  }
}

let decrypt = (password) => {
  try {
    let passwordSecret = "S#p&@H&r@2017",
        salt = passwordSecret,
        hash = CryptoJS.SHA256(salt),
        key = CryptoJS.PBKDF2(passwordSecret, hash, { keySize: 512/32, iterations: 10 }),
        algorithm = 'aes-256-ctr',
        decipher = crypto.createDecipher(algorithm, key.toString(CryptoJS.enc.Base64));
    let dec = decipher.update(password,'hex','utf8');
        
    dec += decipher.final('utf8');

    return String(dec);
  } catch (err) {
    console.log( errorColor("Message decrypt: " + err.message) );
  }
}

exports.encrypt = encrypt;
exports.decrypt = decrypt;