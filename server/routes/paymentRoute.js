const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');
const helmet=require('helmet');
const router = require('express').Router();


//payment confirmation

router.post('/confirm', async(req, res) =>{
    try{
        const val=Math.random();
        const paymentId=Math.floor(Math.random()*1000000);
        const paymentDate=new Date();
        const paymentStatus="success";
        const paymentAmount=500;
        const paymentMethod="stripe";

        if(val>0.5){
            setTimeout(() => {
                console.log("Payment confirmed");
                res.status(200).json({success: true, paymentId: paymentId, paymentDate: paymentDate, paymentStatus: paymentStatus, paymentAmount: paymentAmount, paymentMethod: paymentMethod});
            }, 6000);
        }
        else{
            setTimeout(() => {
                console.log("Payment failed");
                res.status(400).json({success: false});
            }, 6000);
        }  
    }
    catch(err){
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
})

module.exports = router;