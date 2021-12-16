const express = require("express");

const addressController = require("./controllers/address.controller");
const loginController = require("./controllers/login.controller")

const app = express();
app.use(express.json());

app.set("view engine", "ejs")

app.use("/users", addressController);
app.use("/login", loginController);

module.exports = app;














