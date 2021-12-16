const mongoose = require("mongoose")
const popular_in_weightsSchema = new mongoose.Schema({

    
   
    img:{type: String , required: true},
   
    name : {type: String , required : true }

},{
   versionKey: false,
   timestamps: true 
})

module.exports = mongoose.model("popular_in_weights",popular_in_weightsSchema )