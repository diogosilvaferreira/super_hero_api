let CreateSuperHero = (name, alias, area, latitude, longitude) => {
  let query = ` INSERT INTO SuperHero 
                (   
                    uuid
                  , name
                  , alias
                  , area
                  , location
                )
              VALUES (
                    uuid()
                  , "${name}"
                  , "${alias}"
                  , "${area}"
                  , GeomFromText('POINT(${latitude} ${longitude})')
                )
              ON DUPLICATE KEY UPDATE 
                  name = "${name}",
                  alias = "${alias}",
                  area = "${area}"`;
  return query;
}

let ReadSuperHero = () => {
  let query = ` SELECT uuid, name, alias, area, ST_AsText(location) as location
                FROM SuperHero
                WHERE 1`;
  return query;
}

let ReadByIdSuperHero = (uuid) => {
  let query = ` SELECT uuid, name, alias, area, ST_AsText(location) as location
                FROM SuperHero
                WHERE uuid = "${uuid}"`;
  return query;
}

let UpdateSuperHero = (uuid, name, alias, area, latitude, longitude) => {
  let query = ` UPDATE SuperHero 
                  SET name = "${name}", 
                      alias = "${alias}", 
                      area = "${area}", 
                      location = GeomFromText('POINT(${latitude} ${longitude})')
                WHERE uuid = "${uuid}"`;
  return query;
}

let DeleteSuperHero = (uuid) => {
  let query = `DELETE FROM SuperHero WHERE uuid = "${uuid}"`;
  return query;
}

exports.CreateSuperHero = CreateSuperHero;
exports.ReadSuperHero = ReadSuperHero;
exports.UpdateSuperHero = UpdateSuperHero;
exports.DeleteSuperHero = DeleteSuperHero;
exports.ReadByIdSuperHero = ReadByIdSuperHero;

