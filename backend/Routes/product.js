const express=require('express');
const Products=require('../Models/productdb');
const { verifyTokenandAdmin} = require('./middlewires/verifytoken');
const router=express.Router();
// CREATE PRODUCT
router.post('/create',verifyTokenandAdmin,async(req,res)=>{
    const newProduct=req.body;
    const createdProduct=new Products(newProduct);
    try{
        const savedProduct=await createdProduct.save();
        res.status(200).json(savedProduct);
    }catch(err){
        res.status(401).json({err});
    }
});
// UPDATE PRODUCT
router.put('/update/:id',verifyTokenandAdmin,async(req,res)=>{
        try{
        const updatedproduct=req.body;
        const UpdateToDb=await Products.findByIdAndUpdate(req.params.id,
            {
                $set:updatedproduct
            },
            {new:true}
            );
            res.status(200).json(UpdateToDb);
        }catch(err){
        res.status(401).json(err);
        }
});
// DELTE PRODUCT
router.delete('/delete/:id',verifyTokenandAdmin,async(req,res)=>{
    try{
        await Products.findByIdAndDelete(req.params.id);
        res.status(200).json({"Success":"Successfully Deleted"});
    }
    catch(err){
        res.status(401).json(err)
    }
});
// GetAllProduct
router.get('/getAllProducts',async(req,res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;
  
      if (qNew) {
        products = await Products.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        products = await Products.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        products = await Products.find();
      }
        res.status(200).json(products);
    }
    catch(err){
        res.status(401).json(err)
    }
});
// GetSingleProduct
router.get('/getTheProduct/:id',async(req,res)=>{
    try{
        const TheProduct=await Products.findById(req.params.id);
        res.status(200).json(TheProduct);
    }
    catch(err){
        res.status(500).json(err);
    }
});
module.exports=router;