const express = require("express");
const router = express.Router();
const sendSms = require("../configs/client");
const SID = Math.floor(100000 + Math.random() * 900000);
router.post("/phone", (req, res) => {
  try {
    const welcomeMessage = `Welcome to HealthKart! Your verification code is ${SID}`;
    sendSms(req.query.num, welcomeMessage);
    res.status(201).send("done");
  } catch (e) {
    return res.status(500).json({ message: e.message, Satus: "Failed" });
  }
});

module.exports = router;
