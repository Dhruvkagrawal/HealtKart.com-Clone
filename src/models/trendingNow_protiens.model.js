const mongoose = require("mongoose")
const trendingNow_protiensSchema = new mongoose.Schema({

    
   
    imgProduct:{type: String , required: true},
    price_off :{type: String , required: true},
    name : {type: String , required : true },
    rating :{type: String , required: true},
    price :{type: Number , required: true},
    premium_price :{type: String , required: true}

},{
   versionKey: false,
   timestamps: true 
})

module.exports = mongoose.model("trendingNow_protiens",trendingNow_protiensSchema )