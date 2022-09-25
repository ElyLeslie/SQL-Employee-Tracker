INSERT INTO department(id, department_name)
VALUES (1, "Sales"),
       (2, "Engineering"),
       (3, "Finance"),
       (4, "Legal");

INSERT INTO employee_role(id, title, salary, department_id)
VALUES

    (1, "Salesperson", 200000, 1),
    (2, "Lead Engineer", 150000, 2),
    (3, "Account Manager", 72000, 3),
    (4, "Accountant", 69000, 4),
    (5. "Legal Team Lead", 80000, 5),
    (6, "Software Engineer", 175000, 6),
    (7, "Layer", 80, 7);
    
INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES

    (1, "Kovee the Clown", "Leuchovius", 1, 1),
    (2, "Bryan the Pig", "Oinker", 2, 2);
    