const express = require("express");
const { body, validationResult } = require("express-validator");


const Login = require("../models/login.model");

const router = express.Router();

router.post(
  "/",
 
  body("mobile_number")
  .isLength({ min: 10, max: 10 })
  .withMessage(
    "mobile number should be 10 digits"
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
      const login = await Login.create(req.body);

      return res.status(201).json({ login });
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  }
);

router.get("/", async function(req,res)  {
return res.render("login")
})

module.exports = router;