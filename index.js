const inquirer = require("inquirer");
const {
  queriesViewAllDepartments,
  queriesViewEmployee,
  queriesViewAllRoles,
} = require("./query");
//PUT ALL FUNCTIONS YOU ARE EXPORTING ABOVE ONCE DONE

function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "beginningOption",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "QUIT",
        ],
      },
    ])
    .then(({ beginningOption }) => {
      console.log(beginningOption);
      if (beginningOption === "View all departments") {
        viewAllDepartments();
        //THEN I am presented with a formatted table showing department names and department ids
      } else if (beginningOption === "View all roles") {
        viewAllRoles();
        //THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
      } else if (beginningOption === "View all employees") {
        viewEmployee();
        //THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
      } else if (beginningOption === "Add a department") {
        addDepartments();
        //THEN I am prompted to enter the name of the department and that department is added to the database
      } else if (beginningOption === "Add a role") {
        addRole();
        //THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
      } else if (beginningOption === "Add an employee") {
        addEmployee();
        //THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
      } else if (beginningOption === "Update an employee role") {
        updateEmployee();
        //THEN I am prompted to select an employee to update and their new role and this information is updated in the database
      }
    });
}

menu();

function viewEmployee() {
  queriesViewEmployee();
  menu();
  //   console.log("viewEmployee");
}
function addEmployee() {
  console.log("addEmployee");
}
function updateEmployee() {
  console.log("updateEmployee");
}
function viewAllDepartments() {
  //from query.js but you required it in above
  queriesViewAllDepartments();
  //   console.log("viewAllDepartments");
  menu();
  //calling menu function to loop back through qs
}
function addDepartments() {
  console.log("addDepartments");
  // inquirer.prompt[

  // ]
}
function viewAllRoles() {
  queriesViewAllRoles();
  menu();
  //   console.log("viewAllRoles");
}
function addRole() {
  console.log("addRole");
}
