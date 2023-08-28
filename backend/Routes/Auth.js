const express=require('express');
const User=require('../Models/User');
var jwt = require('jsonwebtoken');
require('dotenv').config();
const router=express.Router();
var bcrypt = require('bcryptjs');
const secret_key=process.env.SECRET_KEY;
// SignUp
router.post('/register',async(req,res)=>{
    var salt = await bcrypt.genSaltSync(10);
    var hashvalue = await bcrypt.hashSync(req.body.password, salt);
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:hashvalue,
        isAdmin:req.body.isAdmin
    });
    try{
    const user=await newUser.save();
    res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }

})
// Log In
router.post('/login',async(req,res)=>{
    // const {username}=req.body;
    try{
    // let CurrUser=await User.findOne({username:username});
    // if(!CurrUser){
    //     res.status(401).json({"Err":"No user found"});
    // }
    // let compare=bcrypt.compareSync(req.body.password, CurrUser.password);
    // const data={
    //     user:{
    //         id:CurrUser.id,
    //         isAdmin:CurrUser.isAdmin,
    //     }
    // }
    // var authtoken = jwt.sign(data, secret_key);
    // if(!compare){
    //     res.status(500).json({"Err":"Please Login with Correct Details"});
    // }
    // const {password,...others}=CurrUser._doc;
    // res.status(200).json({...others,authtoken});
    res.send("this is working");
}catch(err){
    res.status(500).json(err);
}
})
module.exports=router;