const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'albums',
  user: 'postgres',
  password: 'VSDO2Cm8'
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};