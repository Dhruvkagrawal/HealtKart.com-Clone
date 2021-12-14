const express = require("express");
const app = express();

const PhoneController = require("./controllers/Auth.controller");

app.use(express.json());

app.use("/login", PhoneController);

module.exports = app;
