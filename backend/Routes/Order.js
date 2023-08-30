const express=require('express');
const router=express.Router();
const order=require('../Models/OrderDb');
const { verifyTokenAndAuthorization, verifyTokenandAdmin, verifyToken } = require('./middlewires/verifytoken');
// CREATE order
router.post('/create',verifyToken,async(req,res)=>{
    const neworder=req.body;
    const createdorder=new order(neworder);
    try{
        const savedorder=await createdorder.save();
        res.status(200).json(savedorder);
    }catch(err){
        res.status(401).json({err});
    }
});
// UPDATE order
router.put('/update/:id',verifyTokenAndAuthorization,async(req,res)=>{
        try{
        const updatedorder=req.body;
        const UpdateToDb=await order.findByIdAndUpdate(req.params.id,
            {
                $set:updatedorder
            },
            {new:true}
            );
            res.status(200).json(UpdateToDb);
        }catch(err){
        res.status(401).json(err);
        }
});
// DELTE order
router.delete('/delete/:id',verifyTokenAndAuthorization,async(req,res)=>{
    try{
        await order.findByIdAndDelete(req.params.id);
        res.status(200).json({"Success":"Successfully Deleted"});
    }
    catch(err){
        res.status(401).json(err)
    }
});
// GetAllorder
router.get('/getAllorders',async(req,res)=>{
    try{
        const orders = await order.find();
        res.status(200).json(orders);
    }
    catch(err){
        res.status(401).json(err)
    }
});
// GetSingleorder
router.get('/getTheorder/:id',verifyTokenAndAuthorization,async(req,res)=>{
    try{
        const Theorder=await order.findOne({userId:req.params.id});
        res.status(200).json(Theorder);
    }
    catch(err){
        res.status(500).json(err);
    }
});
//  Get Monthly Income
router.get('/stats',verifyTokenandAdmin,async(req,res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).send(income);
    } catch (err) {
      res.status(500).json(err);
    }
});
module.exports=router;