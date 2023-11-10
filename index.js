require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/twitter", (req, res) => {
  res.send("twitter!");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai aur coding</h2>");
});
app.listen(port, () => {
  console.log(`Example of app listening on port ${port}`);
});
