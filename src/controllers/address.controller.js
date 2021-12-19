const express = require("express");
const { body, validationResult } = require("express-validator");

const Address = require("../models/address.model");

const router = express.Router();

router.post(
  "/",
  body("first_name")
    .isLength({ min: 3, max: 20 })
    .withMessage(
      "First Name has to be at least 3 characters and maximum 20 characters"
    ),

    body("last_name")
    .isLength({ min: 3, max: 20 })
    .withMessage(
      "Last Name has to be at least 3 characters and maximum 20 characters"
    ),

  body("email").custom(async (value) => {
    // value = a@a.com
    const isEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/.test(value);
    const listOfDomains = ["gmail.com", "yahoo.com"];
    const email = value.split("@")
    if (!listOfDomains.includes(email[1])) {
        throw new Error("We dont accept emails from this domains");
      }
    if (!isEmail) {
      throw new Error("Please enter a proper email address");
    }
    const userByEmail = await Address.findOne({ email: value })
      .lean()
      .exec();
    if (userByEmail) {
      throw new Error("Already registered, please change email address");
    }
    return true;
  }),

  body("mobile_number")
  .isLength({ min: 10, max: 10 })
  .withMessage(
    "mobile number should be 10 digits"
  ),
  body("address1")
  .isLength({ min: 3, max: 20 })
  .withMessage(
    "address1 has to be at least 3 characters and maximum 20 characterss"
  ),
  body("address2")
  .isLength({ min: 3, max: 20 })
  .withMessage(
    "address2 has to be at least 3 characters and maximum 20 characterss"
  ),
  body("city")
  .isLength({ min: 3, max: 20 })
  .withMessage(
    "city has to be at least 3 characters and maximum 20 characterss"
  ),
  body("state")
  .isLength({ min: 3, max: 20 })
  .withMessage(
    "state has to be at least 3 characters and maximum 20 characterss"
  ),
  body("zip")
  .isLength({ min: 6, max: 6 })
  .withMessage(
    "zip should be 6 digits"
  ),


  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let newErrors = errors.array().map(({ msg, param, location }) => {
        return {
          [param]: msg,
        };
      });
      return res.status(400).json({ errors: newErrors });
    }



    try {
      const user = await Address.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        mobile_number: req.body.mobile_number,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,

      });

      return res.render("address")

      
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  }
);

router.get("/", async function(req,res)  {
return res.render("address")
})

module.exports = router;