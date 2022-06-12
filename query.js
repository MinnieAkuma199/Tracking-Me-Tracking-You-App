const db = require("./config/connection");
const connection = require("./config/connection");
//requiring in connection.js

function queriesViewAllDepartments() {
  const sql = `SELECT * FROM department`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows);
  });
}
function queriesViewEmployee() {
  const sql = `SELECT * FROM employee`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows);
  });
}
function queriesViewAllRoles() {
  const sql = `SELECT * FROM role`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows);
  });
}
//YOU WILL PUT ALL THE FUNCTIONS YOU CREATE IN HERE TO EXPORT
module.exports = {
  queriesViewAllDepartments,
  queriesViewEmployee,
  queriesViewAllRoles,
};
