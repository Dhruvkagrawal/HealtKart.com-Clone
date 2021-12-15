const express = require("express");

const addressController = require("./controllers/address.controller");


const app = express();
app.use(express.json());

app.use("/users", addressController);

module.exports = app;














