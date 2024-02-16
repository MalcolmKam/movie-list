let mysql = require('mysql2');
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

//create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});

connection.connect();

app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

