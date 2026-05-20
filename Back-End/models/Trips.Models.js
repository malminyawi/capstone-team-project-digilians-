//setup mongoose
const mongoose =require("mongoose");

const tripzSchema= new mongoose.Schema({
    title:{type:String, required:true, unique:true, minlength:3, maxlength:15, match:/^[a-zA-Z0-9]/},
    description:{type:String, required:true, minlength:10, maxlength:50,match:/^[a-zA-Z0-9]/},
    img:{type:String},//----------->to be continued
    duration:{type:Number, required:true, minlength:1, maxlength:2},
    rate:{type:Number, required:true, minlength:1, maxlength:3},
    price:{type:Number, required:true, minlength:3, maxlength:5}

    //---------------------------------------------------------------> To be comtinued exprience and city and 
});

const tripzModel=mongoose.model("trips",tripzSchema);
module.exports=tripzModel;