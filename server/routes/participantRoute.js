const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');
const helmet=require('helmet');
const Participant = require('../models/participants');
const router = express.Router();

router.post('/add', async (req, res) => {
    try{
        const participant = new Participant(req.body);
        await participant.save();
        res.status(200).send(participant);
        console.log("Participant added successfully");
    }catch(err){
        res.status(500).send(err);
    }
}
);

router.get('/get', async (req, res) => {
    try{
        const participant = await Participant.find({});
        res.status(200).send(participant);
        console.log("Participant fetched successfully");
    }catch(err){
        res.status(500).send(err);
    }
}
);

module.exports = router;