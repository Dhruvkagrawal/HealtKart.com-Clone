
const express = require("express")
const Flashsale_protiens = require("../models/flashsale_protiens.model")
const router = express.Router()



router.post("/", async(req,res)=>{
    
    try{
       // console.log(req.body)
        const flashsale_protiens =await  Flashsale_protiens.create(req.body)
        return res.status(200).send(flashsale_protiens)    
 
 
    }catch(e){
        return res.status(500).json({message : e.message , status : "failed" })
    }
 })
 
 router.get("/", async (req,res)=>{
    try{
       
        const flashsale_protiens = await Flashsale_protiens.find().lean().exec()
        return res.render("index",{
            flashsale_protiens,
        })

    }catch(e){
        return res.status(500).send({message :e.message , status:"failed"})
    }
})
 /*
 router.get("/:id", async (req,res)=>{
     try{
         const flashsale_protiens = await Flashsale_protiens.findById(req.params.id).lean().exec()
         return res.status(201).send({flashsale_protiens})
     }catch(e){
         return res.status(500).send({message :e.message , status:"failed"})
     }
 })
 
 router.patch("/:id", async(req,res)=>{
     try{
         const flashsale_protiens = Flashsale_protiens.findByIdAndUpdate(req.params.id , req.body,{new:true}).lean().exec()
         return res.status(201).send(flashsale_protiens)
     }catch(e){
         return res.status(500).send({message :e.message , status:"failed"})
     }
 })
 
 router.delete("/:id", async(req,res)=>{
 try{
     const flashsale_protiens = await Flashsale_protiens.findByIdAndDelete(req.params.id).lean().exec()
     return res.status(201).send({flashsale_protiens})
 }catch(e){
         return res.status(500).send({message :e.message , status:"failed"})
     }
 
 })
*/

 module.exports = router