const { Schema, model } = require("mongoose");
require("dotenv").config();

const userSchema = new Schema(
  {
    phoneNumber: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 10,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("user", userSchema);
