const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((err) => {
    console.log("Connection Faild");
  });

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

app.listen(3000, () => {
  console.log("Server is runing at port no 3000");
});
