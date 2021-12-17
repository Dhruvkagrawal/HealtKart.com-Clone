const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const DetailSchema = new Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  name: { type: String, required: true },
  gender: { type: String, required: true, default: "Male" },
  DOB: { type: String, required: true },
  password : {type: String, required : true}
});
module.exports = model("details", DetailSchema);