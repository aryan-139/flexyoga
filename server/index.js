const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');
const helmet=require('helmet');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const { MongoClient, ServerApiVersion } = require('mongodb');
const participantRoute=require('./routes/participantRoute');
// const enrollmentRoutes=require('./routes/enrollmentRoute');
const batchRoutes=require('./routes/batchRoute');
const paymentRoute=require('./routes/paymentRoute');
const path = require('path');


const PORT = process.env.PORT || 80;
const app=express();

//configurations
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());    
app.use(morgan('combined'));
dotenv.config();

//connect to mongodb database

const uri = "mongodb+srv://aryanintech:1234@flexyoga.sd7gnuy.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(uri, {
  });
    console.log("Pinged the MongoDB Atlas Cluster. You successfully connected to MongoDB!");
}

//Connecting frontend, use when frontend build is generated and ready to be deployed.
//Serve static files from the React app in production

    // app.use(express.static(path.join(path.resolve(), '../client/build')));
    // app.get('*', function (req, res) {
    //     res.sendFile(path.join(path.resolve(), "../client/build/index.html"), function (err) {
    //         res.status(500).send(err);
    //     })
    // });




//initialize the server

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});


// routes 

app.use("/participants", participantRoute);
app.use("/batches", batchRoutes);
app.use("/payment", paymentRoute );