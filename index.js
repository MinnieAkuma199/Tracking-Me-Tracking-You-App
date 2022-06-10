const inquirer = require("inquirer");
const fs = require("fs"); //do i need this?

inquirer
  .prompt([
    {
      type: "checkbox",
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
      ],
    },
  ])
  .then(({ beginningOption }) => {
    if (beginningOption === "View all departments") {
      inquirer.prompt([
        //THEN I am presented with a formatted table showing department names and department ids
      ]);
    } else if (beginningOption === "View all roles") {
      //THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
    } else if (beginningOption === "View all employees") {
      //THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    } else if (beginningOption === "Add a department") {
      //THEN I am prompted to enter the name of the department and that department is added to the database
    } else if (beginningOption === "Add a role") {
      //THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
    } else if (beginningOption === "Add an employee") {
      //THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
    } else beginningOption === "Update an employee role";
    //THEN I am prompted to select an employee to update and their new role and this information is updated in the database
  });
