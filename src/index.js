const express = require("express");

const addressController = require("./controllers/address.controller");
const signupController = require("./controllers/signup.controller");
const loginController = require("./controllers/login.controller");

const app = express();
app.use(express.json());
app.use(express.static("public"))

app.set("view engine", "ejs")

app.use("/address", addressController);
app.use("/signup", signupController);
app.use("/login", loginController);

module.exports = app;














