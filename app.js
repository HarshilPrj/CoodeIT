const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const pool = require("./config/database");

app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  pool.query("select * from entity.enquiry", (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result.rows);
    }
  });
});

app.listen(4000);
