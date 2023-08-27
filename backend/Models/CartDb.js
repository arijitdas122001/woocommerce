const mongoose=require('mongoose');
const CartDb=new mongoose.Schema({
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
    ]
},
{timestamps:true}
)
module.exports=mongoose.model("Cart",CartDb);