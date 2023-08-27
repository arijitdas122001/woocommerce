const express=require('express')
const app=express();
const cors=require('cors');
const connectDb=require('./Database/dbconnect');
const router=require('./Routes/router');
const Auth=require('./Routes/Auth');
const UserUD=require('./Routes/userUd');
const Product=require('./Routes/product');
const Cart=require('./Routes/Cart');
const Order=require('./Routes/Order');
const Stripe=require('./Routes/Stripe');
const port=5000;
connectDb();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.use(cors());
app.use('/api',router);
app.use('/api/auth',Auth);
app.use('/api/ud',UserUD);
app.use('/api/prod',Product);
app.use('/api/cart',Cart);
app.use('/api/Order',Order);
app.use('/api/chekout',Stripe);
app.listen(port,()=>{
    console.log(`App is running on port no ${port}`);
}) 
