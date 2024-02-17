let mysql = require('mysql2');
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

//create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'movies'
});

connection.connect();


app.get('/movies', (req, res) => {
  connection.query('SELECT * FROM movies', (err, results) => {
    if (err) {
      console.log('Error getting movies: ', err);
      return;
    } else {
      res.json(results);
    }
  })
})

app.use(express.json());

app.post('/movies', (req, res) => {
  connection.query('INSERT INTO movies (title) VALUES (?)', [req.body.title], (err, results) => {
    if (err) {
      console.log('unable to add movie to database: ', err);
      res.sendStatus(500);
    }
    res.sendStatus(201)
  });
})

app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

module.exports = connection