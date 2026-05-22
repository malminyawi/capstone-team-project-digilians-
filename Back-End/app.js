// import dependencies
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const morgan=require("morgan");
const authRoute=require('./routes/authRoutes')
const errorMiddleware =require('./middlewares/errorMiddleware')
const tripsRoutes=require("./routes/tripsRoute")
const reviewRoutes=require("./routes/reviewRoutes")

//activation
require("dotenv").config();
const app=express();
app.use(express.json());
app.use(cors()) //----------------->to be continued
app.use(morgan('dev'));
app.use("/",authRoute);
app.use("/",tripsRoutes);
app.use("/review",reviewRoutes)

app.get("/test", (req,res)=>{
   res.send("Server Works");
});

//connections
const dbConnection=async()=>{
    const connection=await mongoose.connect(process.env.DB_CONNECTION);
    console.log("Mongo database is connected  (o_o) ");
}
dbConnection().catch(err => console.log(err));

app.use(errorMiddleware)

const port=process.env.PORT  || 8000

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
} );
