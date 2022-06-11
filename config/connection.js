const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection(
  {
    host: "localhost",
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`You are connected to employee_db`)
);
db.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});

module.exports = db;
