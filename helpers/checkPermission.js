const jwt = require('jsonwebtoken');

let checkPermission = (request) => {
  let getToken = request.get("authorization"),
      authorization = getToken.substr(4),
      decoded = jwt.decode(authorization, {complete: true});
      //console.log("---------------- ", decoded.payload.role);
  return decoded.payload.role;
}

exports.checkPermission = checkPermission;