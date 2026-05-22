
const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    rate:{
        type:Number,
        min:1,
        max:5
    },
    trip:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"trips",
        required:true
    },
    desc:{
        type:String,
        minlength:3,
        required:true
    }
},{timestamps:true})

const reviews = mongoose.model("Review",reviewSchema)

module.exports = reviews