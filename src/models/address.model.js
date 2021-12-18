const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true},
    mobile_number:{type:Number,required:true},
    address1:{type:String,required:true},
    address2:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    zip:{type:Number,required:true},
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("address", addressSchema)

