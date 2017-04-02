const crypto = require("../helpers/crypto.js");

let CreateUser = (username, password) => {
  let passwordCrypt = crypto.encrypt(password);
  let query = ` INSERT INTO Users 
                (   
                    uuid
                  , username
                  , password
                )
              VALUES (
                    uuid()
                  , "${username}"
                  , "${passwordCrypt}"
                )
              ON DUPLICATE KEY UPDATE 
                  username = "${username}",
                  password = "${passwordCrypt}"`;
  return query;
}

let ReadUser = () => {
  let query = ` SELECT 
                  Users.uuid, Users.username, Users.password, Role.name as Role
                FROM Users, Role
                WHERE Users.uuid = Role.User_uuid;`                
  return query
}

let UpdateUser = (username, password) => {
  let passwordCrypt = crypto.encrypt(password);
  let query = ` UPDATE Users 
                  SET username = "${username}", password = "${passwordCrypt}"
                WHERE username = "${username}"`;
  return query;
}

let DeleteUser = (username, uuid) => {
  let query = `DELETE FROM Users WHERE username = "${username}" and uuid = "${uuid}"`;
  return query;
}

exports.CreateUser = CreateUser;
exports.ReadUser = ReadUser;
exports.UpdateUser = UpdateUser;
exports.DeleteUser = DeleteUser;
