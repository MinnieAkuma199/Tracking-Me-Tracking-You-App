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
    console.log(rows);
    //this is where you would use console.table (instead of console.log(rows) i think!
    //you will want to return rows at some point instead of console.logging it I THINK
  });
}

module.exports = { queriesViewAllDepartments };
