const { Client } = require("pg");

const pool = new Client({
  host: "vga.cz0cxtjkdphj.ap-south-1.rds.amazonaws.com",
  database: "coodeit",
  user: "sa",
  password: "sa123456",
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database is connected successfully !");
  }
});

module.exports = pool;
