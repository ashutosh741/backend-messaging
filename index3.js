// index.js
const sql = require('mssql/msnodesqlv8');
const config = require('./db');

async function connectAndQuery() {
  try {
    console.log('Connecting to the database...');
    let pool = await sql.connect(config);
    console.log('Connected to the database.');

    let result = await pool.request().query('SELECT * FROM dbo.Users');
    console.log('Query results:', result);

    await sql.close();
  } catch (err) {
    console.error('SQL error', err);
  }
}

connectAndQuery();
