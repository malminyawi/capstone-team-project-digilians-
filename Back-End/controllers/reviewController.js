const Review = require("../models/Review.Models")
const User = require("../models/User.models")
const Trip = require("../models/Trips.Models")

// creatr comment
const createReview = async(req,res) => {
    try{
        const userId=req.user
        const {desc, tripId, rate} = req.body 

        const user = await User.findById(userId)
        if(!user){
            return res.status(403).json({message:"User Not  Auth"})
        }

        const trip = await Trip.findById(tripId)
        if(!trip){
            return res.status(404).json({message:"Trip Not Found"})
        }

        //creat review 
        const review = await Review.create({
            desc,
            user:userId,
            trip:tripId
        })
        res.status(200).json({message:"Review Created",review})
        
    }catch(err){
        res.status(500).json({message: err.message});
    }

}
module.exports = {
    createReview
};