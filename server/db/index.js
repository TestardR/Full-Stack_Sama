const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    host: 'localhost',
    filename: './db.sqlite'
  }
});

module.exports = knex;
