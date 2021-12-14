const express = require("express");
const router = express.Router();
const sendSms = require("../configs/client");
const SID = Math.floor(100000 + Math.random() * 900000);
router.post("/signup", (req, res) => {
  try {
    const welcomeMessage = `Welcome to Chillz! Your verification code is ${SID}`;
    sendSms(req.body.phone, welcomeMessage);
    res.status(201).send("done");
  } catch (e) {
    return res.status(500).json({ message: e.message, Satus: "Failed" });
  }
});

module.exports = router;
