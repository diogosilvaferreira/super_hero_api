let ReadHelp = (latitude, longitude) => {
  let query = ` SELECT 
                    SH.name as name_hero
                  , SH.alias as alias_hero
                  , SH.area as area_hero
                  , SP.name as namepower
                  , SP.description as dscpower
                  , (
                   6371 * acos (
                      cos ( radians( ${latitude} ) )
                      * cos( radians( X(SH.location) ) )
                      * cos( radians( Y(SH.location) ) - radians( ${longitude} ) )
                      + sin ( radians( ${latitude} ) )
                      * sin( radians( X(SH.location) ) )
                    )
                  ) AS distance
              from SuperHero SH, 
                 SuperPower SP
              WHERE SH.uuid = SP.SuperHero_uuid
              HAVING distance < 10
              ORDER BY distance `;
              
  return query;
}

exports.ReadHelp = ReadHelp;