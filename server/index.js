const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');
const helmet=require('helmet');

const PORT=8001;
const app=express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());    
app.use(morgan('combined'));

//initialize the server

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});

//create a GET route
app.get('/',(req,res)=>{
    res.send('GET request to the homepage');
});