const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');
const helmet=require('helmet');
const Participant = require('../models/participants');
const router = express.Router();

//add a participant
router.post('/add', async (req, res) => {
    try{
        const participant = new Participant(req.body);
        await participant.save();
        res.status(200).json(participant);
        console.log("Participant added successfully");
    }catch(err){
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
}
);

//get all participants
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

//delete all participants
router.get('/delete', async (req, res) => {
    try {
      await Participant.deleteMany({});
      res.status(200).send("Collection deleted successfully");
      console.log("Collection deleted successfully");
    } catch (err) {
      res.status(500).send(err);
    }
  });

//get a participant by id
router.get('/get/:id', async (req, res) => {
    try{
        const participant = await Participant.findById(req.params.participant_id);
        res.status(200).send(participant);
        console.log("Participant fetched successfully");
    }catch(err){
        res.status(500).send(err);
    }
}
);

module.exports = router;