const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    sign_up : [{type: mongoose.Schema.Types.ObjectId, ref:"signup", required: true}]
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("login", loginSchema)

