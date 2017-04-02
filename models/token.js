let SelectAuth = (uuid) => {
  let query = `SELECT
                Users.uuid as uuid, Users.username as username, Users.password as password, Role.name as role
               FROM Users, Role
               WHERE Role.User_uuid = "${uuid}" 
               AND Users.uuid = "${uuid}"`;
  return query;
}

exports.SelectAuth = SelectAuth;