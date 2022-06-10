const express = require("express");
const mysql = require("mysql2");
//now i can use .env to keep secrets
require("dotenv").config();
const sequelize = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
