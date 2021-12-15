
const express = require("express")
const Popular_in_weights = require("../models/popular_in_weights.model")
const router = express.Router()



router.post("/", async(req,res)=>{
    
    try{
       // console.log(req.body)
        const popular_in_weights =await  Popular_in_weights.create(req.body)
        return res.status(200).send(popular_in_weights)    
 
 
    }catch(e){
        return res.status(500).json({message : e.message , status : "failed" })
    }
 })
 
 router.get("/", async (req,res)=>{
    try{
       
        const popular_in_weights = await Popular_in_weights.find().lean().exec()
        return res.status(201).send({popular_in_weights})
    }catch(e){
        return res.status(500).send({message :e.message , status:"failed"})
    }
})
 /*
 router.get("/:id", async (req,res)=>{
     try{
         const popular_in_weights = await Popular_in_weights.findById(req.params.id).lean().exec()
         return res.status(201).send({popular_in_weights})
     }catch(e){
         return res.status(500).send({message :e.message , status:"failed"})
     }
 })
 
 router.patch("/:id", async(req,res)=>{
     try{
         const popular_in_weights =await Popular_in_weights.findByIdAndUpdate(req.params.id , req.body,{new:true}).lean().exec()
         return res.status(201).send(popular_in_weights)
     }catch(e){
         return res.status(500).send({message :e.message , status:"failed"})
     }
 })
 
 router.delete("/:id", async(req,res)=>{
 try{
     const popular_in_weights = await Popular_in_weights.findByIdAndDelete(req.params.id).lean().exec()
     return res.status(201).send({popular_in_weights})
 }catch(e){
         return res.status(500).send({message :e.message , status:"failed"})
     }
 
 })
*/

 module.exports = router