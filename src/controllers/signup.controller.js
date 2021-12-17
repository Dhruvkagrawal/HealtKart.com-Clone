const express = require("express");
const { body, validationResult } = require("express-validator");

const Signup = require("../models/signup.model");

const router = express.Router();

router.post(
  "/",
  body("name")
    .isLength({ min: 4, max: 20 })
    .withMessage(
      "Name has to be at least 4 characters and maximum 20 characters"
    ),

    body("gender")
    .isLength({ min: 4, max: 6 })
    .withMessage(
      "Gender has to be at least 4 characters and maximum 6 characters"
    ),


  body("DOB")
  .isLength({ min: 8, max: 8 })
  .withMessage(
    "DOB should be 8 digits"
  ),
  body("password")
  .isLength({ min: 8, max: 16 })
  .withMessage(
    "Password has to be at least 8 characters and maximum 16 characterss"
  ),
  body("userid")
  .isLength({ min: 24, max: 24 })
  .withMessage(
    "Userid should be 24 digits"
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
      const signup = await Signup.create({
        name: req.body.name,
        gender: req.body.gender,
        DOB: req.body.DOB,
        password: req.body.password,
        userid: req.body.userid,
        

      });

      return res.render("signup",{signup})

      
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  }
);

router.get("/", async function(req,res)  {
return res.render("signup")
})

module.exports = router;