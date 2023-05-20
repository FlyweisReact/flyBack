/** @format */

const express = require("express");
const cors = require("cors");
const app = express();
const bodyparser = require("body-parser");
const nodemailer = require("./src/route/route");


require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
const PORT = 1200;
app.get("/home", (req, res) => {
  res.status(200).send({ msg: "Working App" });
});
app.use("/api/v1/", nodemailer);
app.listen(PORT, () => {
  console.log(`listening on port `);
});


