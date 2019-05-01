const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'power_user',
  password: '1111',
  host: '13.52.187.49',
  database: 'ratings',
  port: 5432,
});

module.exports = pool;

