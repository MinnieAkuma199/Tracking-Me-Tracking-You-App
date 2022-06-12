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

function queriesAddDepartments() {
  const sql = `INSERT INTO department (name) VALUES (?)`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows([addDepartments.department]));
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

// function queriesAddEmployee() {
//   const roleTitlesArray = [];
//   const roleInfoArray = [];
//   const namesArray = [];
//   const infoArray = [];
//   const sql = `SELECT id, title FROM role`;

//   db.query(sql, (err, rows) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     for (i in rows) {
//       const newRoleObj = {};
//       newRoleObj.id = rows[i].id;
//       newRoleObj.title = rows[i].title;

//       roleInfoArray.push(newRoleObj);
//       roleTitlesArray.push(rows[i].title);
//     }
//     console.table(rows);
//   });
//   db.query(sql, (err, rows) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     for (i in rows) {
//       const newEmpObj = {};
//       newEmpObj.id = rows[i].id;

//       const fullName = `${rows[i].first_name} ${rows[i].last_name}`;
//       newEmpObj.name = fullName;

//       empInfoArr.push(newEmpObj);
//       empNamesArr.push(fullName);
//     }
//     console.table(rows);
//   });
// }

//YOU WILL PUT ALL THE FUNCTIONS YOU CREATE IN HERE TO EXPORT
module.exports = {
  queriesViewAllDepartments,
  queriesViewEmployee,
  queriesViewAllRoles,
  queriesAddDepartments,
};
