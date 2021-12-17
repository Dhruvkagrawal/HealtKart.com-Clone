const { Schema, model } = require("mongoose");

const OTPSchema = new Schema(
  {
    phoneNumber: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 10,
      unique: true,
    },
    otp: {
      type: String,
      required: true,
    },
    createdAt: { type: Date, default: Date.now, index: { expires: 300 } },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = model("otp", OTPSchema);
