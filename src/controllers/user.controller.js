require("dotenv").config();
const jwt = require("jsonwebtoken");

const express = require("express");
const router = express.Router();

const bycrypt = require("bcrypt");
const otpGenrator = require("otp-generator");

const User = require("../models/user.model");
const Otp = require("../models/otp.model");

const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
};

router.post("/phone", async (req, res) => {
  const user = await User.findOne({ phoneNumber: req.body.number });
  if (user)
    return res
      .status(400)
      .send(
        "User allready registered try with a diffrent number or Please Login"
      );
  const OTP = otpGenrator.generate(6, {
    digits: true,
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  const phoneNumber = req.body.number;
  console.log(OTP);

  const otp = { phoneNumber: phoneNumber, otp: OTP };
  const salt = await bycrypt.genSalt(10);
  otp.otp = await bycrypt.hash(otp.otp, salt);
  const result = await Otp.create(otp);
  return res.status(200).send("OTP sent successfully");
});

router.post("/verify", async (req, res) => {
  const otpholder = await Otp.find({
    phoneNumber: req.body.number,
  });
  if (otpholder.length === 0) return res.status(400).send("otp is expires");
  const correctotp = otpholder[otpholder.length - 1];

  const validuser = await bycrypt.compare(req.body.otp, correctotp.otp);
  if (correctotp.phoneNumber === req.body.number && validuser) {
    const user1 = { phoneNumber: req.body.number };
    const user = await User.create(user1);
    const token = newToken(user);
    const OTPdelete = await Otp.deleteMany({
      phoneNumber: correctotp.phoneNumber,
    });
    return res.status(200).send({
      message: "user registartion successfull",
      token: token,
      data: user,
    });
  } else {
    return res.status(400).send("Please Enter a valid otp");
  }
});

module.exports = router;
