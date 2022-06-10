INSERT INTO department ( name)
VALUES( "Software Engineering"),("QA"),("Customer Service");

INSERT INTO role (department_id,title,salary)
VALUES(001, "Software Engineer", "80-100K"),(002,"Tester", "80K"),(003,"Customer Service Representative","50K-60K");

INSERT INTO employee (first_name, last_name, role_id,manager_id)
-- purposefully leaving manager id blank for minnie mouse
VALUES("Minnie","Mouse","400"),("Lily","Bean","500","a1"),("Danny","Phantom","600","b3")