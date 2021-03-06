const db = require('../database/db');

const store = (body, callback) => {
    db.query({
        sql: 'INSERT INTO inventory SET ?',
        timeout: 4000,
        values: {...body },
    }, (err, result) => {
      return callback(err, result);
    });
};

module.exports = {
    store,
};