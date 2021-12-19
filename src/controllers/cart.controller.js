const express = require("express");
const router = express.Router();
const Cart = require("../models/cart.model");
const user = require("../models/user.model");
const autheticate = require("../middlewares/authenticate");



// router.post("/add",autheticate, async (req, res) => {
    
    
//     // let product = Cart.findOne({product:req.body.product})
//     //   console.log(product)
//    if(true)
//    {
//     let cartId= product._id
//     let quan= product.quantity;
//     quan++;
//     const pro= await Cart.findByIdAndUpdate({_id:cartId },{quantity: quan});
//     return res.json(pro)
//    }
//   Cart.findOne({ user: req.user.user._id }).exec((error, cart) => {
//     if (error) return res.status(400).json({ error });
//     if (cart) {
//       // if cart already exists fot the user
//       const product = req.body.cartItems.product;
//       const item = cart.cartItems.find((c) => c.product == product);
//       if (item) {
//         // if there is same product change quantity
//         Cart.findOneAndUpdate(
//           { user: req.user.user._id, "cartItems.product": product },
//           {
//             $set: {
//               "cartItems.$": {
//                 ...req.body.cartItems,
//                 quantity: item.quantity + req.body.cartItems.quantity,
//               },
//             },
//           }
//         ).exec((error, cart) => {
//           if (error) return res.status(400).json({ error });
//           if (cart) {
//             return res.status(201).json({ cart });
//           }
//         });
//       } else {
//         // if there s no same product
//         Cart.findOneAndUpdate(
//           { user: req.user.user._id },
//           {
//             $push: {
//               cartItems: req.body.cartItems,
//             },
//           }
//         ).exec((error, cart) => {
//           if (error) return res.status(400).json({ error });
//           if (cart) {
//             return res.status(201).json({ cart });
//           }
//         });
//       }
//     } else {
//       // If there is not any Product in user cart
//       const cart = new Cart({
//         user: req.user.user._id,
//         cartItems: req.body.cartItems,
//       });
//       cart.save((error, cart) => {
//         if (error) return res.status(400).json({ error });
//         if (cart) {
//           return res.status(201).json({ cart });
//         }
//       });
//     }
//   });
// });

module.exports = router;