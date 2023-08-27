const mongoose=require('mongoose');
const OrderDb=new mongoose.Schema({
    userId:{type:String,required:true},
    products:[
        {
            productId:{
                type:Number,
            },
            quantity:{
                type:Number,
                default:1
            },
        }
    ],
    amount:{type:Number,required:true},
    address:{type:Object,require:true},
    status:{type:String,default:"pending"},
},
{timestamps:true}
);
module.exports=mongoose.model('Order',OrderDb);