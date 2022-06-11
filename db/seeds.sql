INSERT INTO department (name)
VALUES( "Software Engineering"),("QA"),("Customer Service");

INSERT INTO role (department_id,title,salary)
VALUES(1, "Software Engineer", 90000),(2,"Tester", 80000 ),(3,"Customer Service Rep",50000);

INSERT INTO employee (first_name, last_name, role_id,manager_id)

VALUES("Minnie","Mouse", 1, NULL),("Lily","Bean",3,1),("Danny","Phantom",2,1);