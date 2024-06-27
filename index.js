const sql = require('mssql/msnodesqlv8');
const config = require('./dbConfig')


sql.connect(config)
    .then(pool => {
        console.log('Connected to SQL Server');
    })
    .catch(err => {
        console.error('Error connecting to SQL Server:', err);
    });