const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "containers-us-west-47.railway.app",
  user: "root",
  password: "pgSZrfdk7E5FHAbXq2lU",
  database: "railway",
  host: "6003"
});

connection.connect();

// connection.query("SELECT * FROM users", (err, rows, fields) => {
//   if (err) throw err;

//   console.log("The solution is: ", rows[0].solution);
// });

// connection.end();
module.exports = connection;
