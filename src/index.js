const express = require("express");

const flashsale_protiensController = require("./controllers/flashsale_protiens.controllers")
const trendingNow_protiensController = require("./controllers/trendingNow_protiens.controllers")
const popular_in_weightsController = require("./controllers/popular_in_weights.controllers")

const app = express();
app.use(express.json())

app.use("/flashsale",flashsale_protiensController )
app.use("/trending",trendingNow_protiensController )
app.use("/popular",popular_in_weightsController )

module.exports = app;
