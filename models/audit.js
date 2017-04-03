let CreateAudit = (entity) => {
  entity = entity.replace(/[\\"]/g, '');
  
  let query = ` INSERT INTO AuditEvent 
                (   
                    uuid
                  , entity
                  , datetime
                  , username
                  , action
                )
              VALUES (
                    uuid()
                  , "${entity}"
                  , CURRENT_TIMESTAMP
                  , "NULL"
                  , "NULL"
                )
              ON DUPLICATE KEY UPDATE 
                  entity = "${entity}",
                  datetime = CURRENT_TIMESTAMP`;
  return query;
}

let ReadAudit = () => {
  let query = `SELECT * FROM AuditEvent WHERE 1`;

  return query;
}

exports.CreateAudit = CreateAudit;
exports.ReadAudit = ReadAudit;