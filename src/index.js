const express = require("express");

const flashsale_protiensController = require("./controllers/flashsale_protiens.controllers")
const trendingNow_protiensController = require("./controllers/trendingNow_protiens.controllers")

const app = express();
app.use(express.json())
app.use("/flashsale",flashsale_protiensController )
app.use("/trending",trendingNow_protiensController )

module.exports = app;
