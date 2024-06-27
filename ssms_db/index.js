// const sql = require('mssql/msnodesqlv8');
// const config = require('./dbconfig');

// async function connectToDatabase() {
//   try {
//     let pool = await sql.connect(config);
//     console.log('Connected to the database');

//     // Example query
//     let result = await pool.request().query('SELECT * FROM Users');
//     console.log(result);

//     // Close the connection
//     await sql.close();
//   } catch (err) {
//     console.error('Database connection failed: ', err);
//   }
// }

// connectToDatabase();




















// const express = require('express');
// const userRoute = require('./routes/userRoutes')
// const app = express();

// const PORT = process.env.PORT || 8080;
// app.use(express.json())


// app.use("/api/v1/user", userRoute)

// app.listen(PORT, ()=>{
//     console.log(`server is running at ${PORT}`)
// })


// const sql = require('mssql');
// const config = require('./db');

// async function connectToDatabase() {
//   try {
//     let pool = await sql.connect(config);
//     console.log('Connected to the database');

//     // Example query
//     let result = await pool.request().query('SELECT * FROM Users');
//     console.log(result);

//     // Close the connection
//     await sql.close();
//   } catch (err) {
//     console.error('Database connection failed: ', err);
//   }
// }


// const sql = require('mssql');
// const config = require('./db');

// async function connectToDatabase() {
//   try {
//     console.log('Connecting to the database with config:', config);
//     let pool = await sql.connect(config);
//     console.log('Connected to the database');

//     // Example query
//     let result = await pool.request().query('SELECT * FROM MessagingDashboard.Users');
//     console.log(result);

//     // Close the connection
//     await sql.close();
//   } catch (err) {
//     console.error('Database connection failed: ', err);
//   }
// }



// connectToDatabase();



// const sql = require('mssql');
// const config = require('./db');

// // Enable tedious debug logging
// sql.on('debug', (msg) => {
//   console.log('DEBUG:', msg);
// });

// async function connectToDatabase() {
//   try {
//     console.log('Connecting to the database with config:', config);
//     let pool = await sql.connect(config);
//     console.log('Connected to the database');

//     // Example query
//     let result = await pool.request().query('SELECT * FROM Users');
//     console.log(result);

//     // Close the connection
//     await sql.close();
//   } catch (err) {
//     console.error('Database connection failed: ', err);
//   }
// }

// connectToDatabase();


const sql = require('mssql')

(async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('Server=ASHUTOSH\\SQLEXPRESS,1433;Database=messagingdasboard;Encrypt=true')
        const result = await sql.query`select * from Users`
        console.dir(result)
    } catch (err) {
        // ... error checks
    }
})()
