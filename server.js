
// const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

// Use MySql query to write data into the database, not fs.


// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: "root",
    password: "Password!123",
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
);

// At the end of every single function that we write, we would include the addData function in order to create a perpetual loop.

function addData() {
  inquirer.prompt([
    {
      type: "list",
      choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role", "Exit"],
      message: "What would you like to do?",
      name: "options"
    }
  ])

    .then((answers) => {
      switch (answers.options) {
        case "view all departments":
          viewDepartments()

          break;

        case "view all roles":

          viewRoles()

          break;

        case "view all employees":

          viewEmployees()
          break;

        case "add a department":

          addDepartment()

          break;

        case "add a role":

          addRole()

          break;

        case "add an employee":

          addEmployee()

          break;

        case "update an employee role":

          updateRole()

          break;

        case "Exit":
          console.log("Exiting program...")
          break;
      }
    })
}

function viewDepartments() {
  db.query('SELECT * FROM department', (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table("\n", result)
  })
  addData()
}

function viewRoles() {
  db.query('SELECT employee_role.title, employee_role.salary, department.department_name FROM employee_role, department WHERE employee_role.department_id = department.id', (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table("\n", result)
  })
  addData()
}

function viewEmployees() {
  db.query('SELECT B.first_name, B.last_name, A.first_name AS Manager, employee_role.title, employee_role.salary, department.department_name FROM employee A, employee B, employee_role, department WHERE A.id = B.manager_id AND B.role_id = employee_role.id AND employee_role.department_id = department.id', (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table("\n", result)
  })
  addData()
}

function addDepartment() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the name of the department you want to add?",
      name: "newdeptName"
    }
  ])
    .then((answers) => {
      db.query(`INSERT INTO department (department_name)
    VALUES ('${answers.newdeptName}');`, (err, results) => {
        if (err) {
          console.log(err)
        }
      }

      )
      viewDepartments()
     
    } )}

    function addEmployee(){
      inquirer.prompt([
        {
          type: "input",
          message: "What is the first name of the employee?",
          name: "firstName"
        },
        {
          type: "input",
          message: "What is the last name of the employee?",
          name: "lastName"
        },
        {
          type: "list",
          message: "The new employee's role?",
          name: "newEmpRole",
          choices: ["Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead", "Lawyer"]
        },
        {
          type: "list",
          message: "The new employee's manager?",
          name: "newEmpManager",
          choices: ["Kovee the Clown", "Bryan the Pig"]
        },
      ])
        .then((answers) => {
          const newFirst = answers.firstName
          const newLast = answers.lastName
          switch (answers.newEmpRole+answers.newEmpManager) {
            case "Salesperson"+"Kovee the Clown": 
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
           VALUES ('${newFirst}', '${newLast}', 1, 1);`, (err, results) => {
            if (err) {
              console.log(err)
            }
            console.table(results)
          }
          )
          viewEmployees()
          break;
          case "Salesperson"+"Bryan the Pig":
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
           VALUES ('${newFirst}', '${newLast}', 1, 2);`, (err, results) => {
            if (err) {
              console.log(err)
            }
            console.table(results)
          }
          )
          viewEmployees()
          break;
          case "Lead Engineer"+"Kovee the Clown":
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
           VALUES ('${newFirst}', '${newLast}', 2, 1);`, (err, results) => {
            if (err) {
              console.log(err)
            }
            console.table(results)
          }
          )
          viewEmployees()
          break;
          case "Lead Engineer"+"Bryan the Pig":
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES ('${newFirst}', '${newLast}', 2, 2);`, (err, results) => {
            if (err) {
              console.log(err)
            }
            console.table(results)
            }
           )
          viewEmployees()
          
          break;
          case "Software Engineer"+"Kovee the Clown":
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
           VALUES ('${newFirst}', '${newLast}', 6, 1);`, (err, results) => {
            if (err) {
              console.log(err)
            }
            console.table(results)
          }
          )
          viewEmployees()
          break;
          case "Software Engineer"+"Bryan the Pig":
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
           VALUES ('${newFirst}', '${newLast}', 6, 2);`, (err, results) => {
            if (err) {
              console.log(err)
            }
            console.table(results)
          }
          )
          viewEmployees()
          break;
          case "Account Manager"+"Kovee the Clown":
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
           VALUES ('${newFirst}', '${newLast}', 3, 1);`, (err, results) => {
            if (err) {
              console.log(err)
            }
            console.table(results)
          }
          )
          viewEmployees()
          break;
          case "Account Manager"+"Bryan the Pig":
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
           VALUES ('${newFirst}', '${newLast}', 3, 2);`, (err, results) => {
            if (err) {
              console.log(err)
            }
            console.table(results)
          }
          )
          viewEmployees()
          break;
          case "Accountant"+"Kovee the Clown":
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
           VALUES ('${newFirst}', '${newLast}', 4, 1);`, (err, results) => {
            if (err) {
              console.log(err)
            }
            console.table(results)
          }
          )
          viewEmployees()
          break;
          case "Accountant"+"Bryan the Pig":
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
           VALUES ('${newFirst}', '${newLast}', 4, 2);`, (err, results) => {
            if (err) {
              console.log(err)
            }
            console.table(results)
          }
          )
          viewEmployees()
          break;
          case "Legal Team Lead"+"Kovee the Clown":
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
           VALUES ('${newFirst}', '${newLast}', 5, 1);`, (err, results) => {
            if (err) {
              console.log(err)
            }
            console.table(results)
          }
          )
          viewEmployees()
          break;
          case "Legal Team Lead"+"Bryan the Pig":
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
           VALUES ('${newFirst}', '${newLast}', 5, 2);`, (err, results) => {
            if (err) {
              console.log(err)
            }
            console.table(results)
          }
          )
          viewEmployees()
          break;
          case "Lawyer"+"Bryan the Pig":
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
           VALUES ('${newFirst}', '${newLast}', 7, 2);`, (err, results) => {
            if (err) {
              console.log(err)
            }
            console.table(results)
          }
          )
          viewEmployees()
          break;
          case "Lawyer"+"Kovee the Clown":
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
           VALUES ('${newFirst}', '${newLast}', 7, 1);`, (err, results) => {
            if (err) {
              console.log(err)
            }
            console.table(results)
          }
          )
          viewEmployees()
          break;
        }

           }
           )

    }

    function addRole() {
      inquirer.prompt([
        {
          type: "input",
          message: "What is the name of the department you want to add?",
          name: "newdeptName"
        }
      ])
        .then((answers) => {
          db.query(`INSERT INTO department (department_name)
        VALUES ('${answers.newdeptName}');`, (err, results) => {
            if (err) {
              console.log(err)
            }
          }
    
          )
          viewRoles()
         
        } )}
//   If they choose to view all employees, insert this into a function.
// Each individual if statement should have its own correlated function.

//     db.query('SELECT * FROM employees', (err, data) => err ? res.status(500).json(err) : res.json(data))
//   app.post('/api/add-movie', (req, res) => {
//     // req.body
//     db.query("INSERT INTO department (department_name) VALUES(?)", req.body.department_name, (err, data) => err ? res.status(500).json(err) : res.json(data) )
//   });

//   app.put('/api/update-review/:id', (req, res) => {
//     db.query("UPDATE reviews SET review = ? WHERE id = ?", [req.body.review, req.params.id], (err, data) => err ? res.status(500).json(err) : res.json(data))
//     // req.params.id
//   });

//   app.delete("/api/movie/:id", (req, res) => {
//     db.query("DELETE FROM movies WHERE id= ?", req.params.id, (err, data) => err ? res.status(500).json(err) : res.json(data))
//   });

//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
  addData()

  // db.query("INSERT INTO department ")