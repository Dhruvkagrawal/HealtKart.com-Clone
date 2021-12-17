const express = require("express");
const app = express();

const PhoneController = require("./controllers/Auth.controller");
const flashsale_protiensController = require("./controllers/user.controller");
app.use(express.json());

app.use("/signup", PhoneController);
app.use("/flashsale", flashsale_protiensController);
module.exports = app;
