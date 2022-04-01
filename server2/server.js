const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());
// parse application/json
app.use(bodyParser.json());

//create database connection
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "stock_db",
  socketPath:"/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock",
  // Remove or change path in case of windows or 
});

//connect to database
conn.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server !");
});

//add new user
app.post("/store", (req, res) => {
  let data = { fullname: req.body.fullName, email: req.body.email };
  let sql = "INSERT INTO r17 SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

//show users
app.get("/show", (req, res) => {
  const q = "select * from r17";
  conn.query(q, (error, result) => {
    if (error) {
      throw error;
    }
    res.send(result);
    // console.log(result);
  });
});

app.listen(3002, (err) => {
  if (err) {
    throw err;
  }
  console.log("Server running successfully on 3002 !!!");
});
