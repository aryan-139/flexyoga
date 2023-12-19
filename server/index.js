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

const PORT=8001;
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

//initialize the server

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});


// routes 

app.use("/participants", participantRoute);
app.use("/batches", batchRoutes);
app.use("/payment", paymentRoute );