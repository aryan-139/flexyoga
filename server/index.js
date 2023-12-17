const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');
const helmet=require('helmet');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const { MongoClient, ServerApiVersion } = require('mongodb');

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

//connecting using the mongodb driver

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });
//   async function run() {
//     try {
//       await client.connect();
//       // Send a ping to confirm a successful connection
//       await client.db("admin").command({ ping: 1 });
//       console.log("Pinged your deployment. You successfully connected to MongoDB!");
//       // Perform 

//     } finally {
//       await client.close();
//     }
//   }
//   run().catch(console.dir);

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

//create a GET route
app.get('/',(req,res)=>{
    res.send('GET request to the homepage');
});