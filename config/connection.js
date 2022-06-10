const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
