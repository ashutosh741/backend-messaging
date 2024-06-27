const sql = require('mssql');
// const { driver } = require('mssql/lib/base');
// const sql = require('mssql/msnodesqlv8');

const config = {
  server: "ASHUTOSH-MISHRA//MSSQLSERVER01",
  // server: "MessagingDashboard",
  database: "MessagingDashboard",
  // user: 'ashutosh', // Corrected property name
  // password: 'Water@123',
  // driver:"msnodesqlv8",
  options: {
    // encrypt: false, // Use encryption
    trustedConnection: true,
    // trustServerCertificate: false, // Use for self-signed certificates
    // enableArithAbort: false,
  },
  port:1433, // Default port for SQL Server
};

sql.connect(config).then(pool => {
  return pool.request()
      .query('SELECT * FROM dbo.Users');
}).then(result => {
  console.dir(result);
}).catch(err => {
  console.log(err);
});
