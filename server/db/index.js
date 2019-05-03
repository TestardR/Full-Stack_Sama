const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    host: 'localhost',
    filename: './db.sqlite'
  },
  useNullAsDefault: true
});

module.exports = knex;
