const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'stellaliang',
  host: 'localhost',
  database: 'postgres',
  port: 5432,
});

module.exports = pool;