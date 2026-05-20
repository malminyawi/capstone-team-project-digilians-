// import dependencies
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const morgan=require("morgan");



//activation
require("dotenv").config();
const app=express();
app.use(express.json());
app.use(cors()) //----------------->to be continued
app.use(morgan('dev'));





//connections
const dbConnection=async()=>{
    const connection=await mongoose.connect(process.env.DB_CONNECTION);
    console.log("Mongo database is connected  (o_o) ");
}
dbConnection();

app.listen(process.env.PORT || 5000,()=>{
    console.log(`server is listening on port ${process.env.PORT}`);
} );
const express = require("express");
const app=express()

require('dotenv').config()

app.use(express.json())

const mongoose=require('mongoose')
async function dB_Connection(){
  try{
      await mongoose.connect(process.env.DB)
      console.log("DB IS CONNECTED");
      
  }catch(err){
    
    console.log(err);
    
  }


}

dB_Connection()

const authRoute=require('./routes/authRoutes')
app.use("/",authRoute)
const port=process.env.PORT
const errorMiddleware =require('./middleware/errorMiddleware')



app.use(errorMiddleware)
app.listen(port,()=>{
    console.log("server is runing");
    
})
