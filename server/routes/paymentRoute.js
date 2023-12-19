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
        if(val>0.5){
            setTimeout(() => {
                res.status(200).json({success: true});
            }, 6000);
        }
        else{
            setTimeout(() => {
                res.status(200).json({success: false});
            }, 6000);
        }  
    }
    catch(err){
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
})

module.exports = router;