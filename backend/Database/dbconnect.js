const mongoose = require('mongoose');
require('dotenv').config();
const connectDb=()=>{
mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log("Db connection Successfull"))
.catch((err)=>{
    console.log(err);
});
}
module.exports=connectDb;
