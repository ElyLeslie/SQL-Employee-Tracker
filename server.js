
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const db = mysql.createConnection(
    {
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    console.log(`Connected to the employee_db database.`)
  );
  
  // A total count of what's in_stock
  app.get("/api/movies", (req, res) => {
    db.query('SELECT * FROM movies', (err, data) => err ? res.status(500).json(err) : res.json(data))
  })
  app.post('/api/add-movie', (req, res) => {
    // req.body
    db.query("INSERT INTO movies (movie_name) VALUES(?)", req.body.movie_name, (err, data) => err ? res.status(500).json(err) : res.json(data) )
  });

  app.put('/api/update-review/:id', (req, res) => {
    db.query("UPDATE reviews SET review = ? WHERE id = ?", [req.body.review, req.params.id], (err, data) => err ? res.status(500).json(err) : res.json(data))
    // req.params.id
  });

  app.delete("/api/movie/:id", (req, res) => {
    db.query("DELETE FROM movies WHERE id= ?", req.params.id, (err, data) => err ? res.status(500).json(err) : res.json(data))
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  