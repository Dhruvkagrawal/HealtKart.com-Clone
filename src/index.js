const express = require("express");

const flashsale_protiensController = require("./controllers/flashsale_protiens.controllers")
const app = express();
app.use(express.json())
app.use("/flashsale",flashsale_protiensController )

module.exports = app;
