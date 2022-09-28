INSERT INTO department(id, department_name)
VALUES (1, "Sales"),
       (2, "Engineering"),
       (3, "Finance"),
       (4, "Legal");

INSERT INTO employee_role(id, title, salary, department_id)
VALUES

    (1, "Salesperson", 200000.00, 1),
    (2, "Lead Engineer", 150000.00, 2),
    (3, "Account Manager", 72000.00, 3),
    (4, "Accountant", 69000.00, 3),
    (5, "Legal Team Lead", 80000.00, 4),
    (6, "Software Engineer", 175000.00, 2),
    (7, "Lawyer", 80.00, 4);
    
INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES

    (1, "Kovee the Clown", "Leuchovius", 1, null),
    (2, "Bryan the Pig", "Oinker", 2, null),
    (3, "Billy", "Eyelash", 7, 2),
    (4, "Luigi", "Mario", 4, 1);
    
-- SELECT * From Employee WHERE manager_id IS null (For displaying managers)