const config = {
  // user: "",
  // password: "",
  server: "ASHUTOSH\\SQLEXPRESS", // You can use 'localhost\\instance' to connect to named instance
  database: "MessagingDashboard",

  options: {
    encrypt: true, // Use this if you're on Windows Azure
    trustServerCertificate: true, // Change to true for local dev / self-signed certs
  },
};
module.exports = config;
