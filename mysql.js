const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "nodejs_db"
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Mysql connection was successful.");
});

module.exports = connection;