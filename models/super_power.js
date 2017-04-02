let CreateSuperPower = (name, description, uuid_superhero) => {
  let query = ` INSERT INTO SuperPower
                (   
                    uuid
                  , name
                  , description
                  , SuperHero_uuid
                )
              VALUES (
                    uuid()
                  , "${name}"
                  , "${description}"
                  , "${uuid_superhero}"
                )
              ON DUPLICATE KEY UPDATE 
                  name = "${name}",
                  description = "${description}"`;

  console.log(query);

  return query;
}

let ReadSuperPower = () => {
  let query = ` SELECT *
                FROM SuperPower
                WHERE 1`;
  return query;
}

let ReadByIdSuperPower = (uuid) => {
  let query = ` SELECT *
                FROM SuperPower
                WHERE uuid = "${uuid}"`;
  return query;
}

let UpdateSuperPower = (uuid, name, description, uuid_superhero) => {
  let query = ` UPDATE SuperPower 
                  SET name = "${name}", 
                      description = "${description}", 
                      SuperHero_uuid = "${uuid_superhero}"
                WHERE uuid = "${uuid}"`;
  return query;
}

let DeleteSuperPower = (uuid) => {
  let query = `DELETE FROM SuperPower WHERE uuid = "${uuid}"`;
  return query;
}

exports.CreateSuperPower = CreateSuperPower;
exports.ReadSuperPower = ReadSuperPower;
exports.UpdateSuperPower = UpdateSuperPower;
exports.DeleteSuperPower = DeleteSuperPower;
exports.ReadByIdSuperPower = ReadByIdSuperPower;
