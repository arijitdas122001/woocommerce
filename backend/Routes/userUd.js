const express=require('express');
const User=require('../Models/User');
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenandAdmin}=require('./middlewires/verifytoken');
var bcrypt = require('bcryptjs');
const router=express.Router();
// UPDATE
router.put('/update/:id', verifyTokenAndAuthorization,async(req,res)=>{
if(req.body.password){
    var salt = await bcrypt.genSaltSync(10);
    var hashvalue = await bcrypt.hashSync(req.body.password, salt);
    req.body.password=hashvalue;
}
try{
    const UpdatedUser=await User.findByIdAndUpdate(req.params.id,
    {
        $set:req.body
    },
    {new:true}
    );
    res.json(UpdatedUser);
}catch(err){
    res.status(401).json(err);
}
});
// DELETE
router.delete('/del/:id',verifyTokenAndAuthorization,async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({"Success":"User Deleted"});
    }catch{
        res.status(401).send({'err':"Some Error occured"});
    }
});
// Get All Users
router.get('/getAll',verifyTokenandAdmin,async(req,res)=>{
    try{
        const users=await User.find();
        res.status(200).send(users);
    }catch{
        res.status(401).send({'err':"Some Error occured"});
    }
});
//Get Stats
router.get('/stats',verifyTokenandAdmin,async(req,res)=>{
const date=new Date();
const lastYear=new Date(date.setFullYear(date.getFullYear()-1));
try{
    const data=await User.aggregate([
        {$match:{createdAt:{$gte:lastYear}}},
        {
            $project:{
                month:{$month:"$createdAt"},
            },
        },
        {
            $group:{
                _id:"$month",
                total:{$sum:1},
            },
        },
    ])
    res.status(200).json(data);
}catch(err){
    res.status(500).json(err);
}
})
module.exports=router;