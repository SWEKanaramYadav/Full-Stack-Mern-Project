const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
require("./db/conn");

app.use(express.json());
// const User = require("./model/userSchema");

// we link the router file to make route
app.use(require("./router/auth"));

// Middelware
const middleware = (req, res, next) => {
  console.log("Hello from middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello World from server");
});

app.get("/about", middleware, (req, res) => {
  res.send("Hello World from about");
});

app.get("/contact", (req, res) => {
  res.send("Hello World from contact");
});

app.get("/signin", (req, res) => {
  res.send("Hello World from signin");
});

app.get("/signup", (req, res) => {
  res.send("Hello World from Signup");
});

app.listen(PORT, () => {
  console.log(`Server is runing at port no ${PORT}`);
});
