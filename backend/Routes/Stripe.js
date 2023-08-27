const express=require('express');
const router=express.Router();
require('dotenv').config();
const stripe=require('stripe')('sk_test_51NahNeSBb3CAoqNkNVkuos0ELnep2c0ebg5IlzW3qybPEPSbBdmXpfqnmCdHx2ScmMmSbvkDo9F1TtHvceQuAaUl00hPb3kwRW')
router.post('/pay',async(req,res)=>{
  const paymentIntent = await stripe.paymentIntents.create(
    {
      amount: 100000,
      currency: 'inr',
      automatic_payment_methods: {
        enabled: true,
      },
    },
  );
}
);
module.exports=router;