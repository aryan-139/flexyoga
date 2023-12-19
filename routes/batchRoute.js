const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');
const helmet=require('helmet');
const Batch=require('../models/batches');

const router = express.Router();

router.post('/add', async (req, res) => {
    try{
        const batch = new Batch(req.body);
        await batch.save();
        res.status(200).send(batch);
        console.log("Batch added successfully");
    }catch(err){
        res.status(500).send(err);
    }
}
);

router.get('/get', async (req, res) => {
    try{
        const batch = await Batch.find({});
        res.status(200).send(batch);
        console.log("Batch fetched successfully");
    }catch(err){
        res.status(500).send(err);
    }
}
);

module.exports = router;