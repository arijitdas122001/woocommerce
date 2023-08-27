const express=require('express');
const Cart=require('../Models/CartDb');
const { verifyTokenandAdmin, verifyTokenAndAuthorization, verifyToken} = require('./middlewires/verifytoken');
const router=express.Router();
// CREATE Cart
router.post('/create',verifyToken,async(req,res)=>{
    const newCart=req.body;
    const CartUpdate=new Cart(newCart);
    try{
        const savedCart=await CartUpdate.save();
        res.status(200).json(savedCart);
    }catch(err){
        res.status(401).json({err});
    }
});
// UPDATE Cart
router.put('/update/:id',verifyTokenAndAuthorization,async(req,res)=>{
        try{
        const updatedCart=req.body;
        const UpdateToDb=await Cart.findByIdAndUpdate(req.params.id,
            {
                $set:updatedCart
            },
            {new:true}
            );
            res.status(200).json(UpdateToDb);
        }catch(err){
        res.status(401).json(err);
        }
});
// DELTE CART
router.delete('/delete/:id',verifyTokenAndAuthorization,async(req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json({"Success":"Successfully Deleted"});
    }
    catch(err){
        res.status(401).json(err)
    }
});
// GetAllCart
router.get("/",verifyTokenandAdmin, async (req, res) => {
    try {
      const carts = await Cart.find();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  });
// Get The User Cart
router.get('/getTheCart/:id',verifyTokenAndAuthorization ,async(req,res)=>{
    try{
        const TheCart=await Cart.findOne({userId:req.params.id});
        res.status(200).json(TheCart);
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports=router;