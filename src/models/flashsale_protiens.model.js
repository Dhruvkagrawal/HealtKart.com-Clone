const mongoose = require("mongoose")
const flashsale_protiensSchema = new mongoose.Schema({

    flash_sale_img :{type: String , required: true },
    units :{type: String , required :true },
    imgProduct:{type: String , required: true},
    price_off :{type: String , required: true},
    name : {type: String , required : true },
    rating :{type: String , required: true},
    price :{type: Number , required: true},
    premium_price :{type: String , required: true},

},{
   versionKey: false,
   timestamps: true 
})

module.exports = mongoose.model("flashsale_protiens",flashsale_protiensSchema )