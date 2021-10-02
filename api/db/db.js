const Pool = require('pg').Pool;

const connectionString = process.env.DB_STRING;

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = { pool };