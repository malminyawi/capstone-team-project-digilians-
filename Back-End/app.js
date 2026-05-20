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
