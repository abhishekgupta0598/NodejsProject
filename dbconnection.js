const mysql = require("mysql");

const dbconn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "abhishek",
  database: "node_mysql_crud_db",
});

dbconn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected");
});

module.exports = dbconn;
