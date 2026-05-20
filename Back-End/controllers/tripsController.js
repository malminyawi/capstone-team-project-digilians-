const trips=require("../models/Trips.Models.js");
const mongoose=require("mongoose");


//------------------>for postman 
//create a trip
const createTrip= async(req,res,next)=>{
    try{
    const trip = await trips.create(req.body);
    
    res.status(201).json({Message:"Trip is added to website"});
    }catch(error){next(error)}
}

//delete a trip
const deleteTrip= async(req,res,next)=>{
    try{
    const tripId=req.params._id;
    console.log(tripId)
    const trip = await trips.findById(tripId);
    if(!trip){res.status(404).json({Message:"trip Not found"})}
    const tripToDelete = await trips.findByIdAndDelete(tripId);
    res.status(200).json({Message:"Trip is deleted"});
    }catch(error){next(error)}
}


//add trips pictures
const addTripImage= async(req,res,next)=>{
    try{
    const tripId=req.params._id;
    const tripIamge=req.file;
    const trip = await trips.findOneByIdAndUpdate(tripId,tripIamge);
    if(!trip){res.status(404).json({Message:"trip Not found"})}
    res.status(200).json({Message:"Image is added to",trip:trip.title});
    }catch(error){next(error)}
}




//------------------> for users
//get a trip by id
const getTripById= async(req,res,next)=>{
    try{
    const trip = await trips.findById(req.params._id);
    if(!trip){res.status(404).json({Message:"trip Not found"})}
    res.status(200).json({Message:"Trip:",trip});
    }catch(error){next(error)}
}

//get all trips
const getAllTrips= async(req,res,next)=>{
    try{
    const trips = await trips.find();
    if(!trips){res.status(404).json({Message:"trip Not found"})}
    res.status(200).json({Message:"Trips:",trips});
    }catch(error){next(error)}
}

//get a trip by price
const getTripByPrice= async(req,res,next)=>{
    try{
    const pricee=req.params.price
    const trips = await trips.find({price:pricee});
    if(!trips){res.status(404).json({Message:"trip Not found"})}
    res.status(200).json({Message:"Trips:",trips});
    }catch(error){next(error)}
}

//get a trip by city
const getTripByCity= async(req,res,next)=>{
    try{
    const cityy=req.params.city
    const trips = await trips.find({city:cityy});
    if(!trips){res.status(404).json({Message:"trip Not found"})}
    res.status(200).json({Message:"Trips:",trips});
    }catch(error){next(error)}
}

//get a trip by  experience
const getTripByExp= async(req,res,next)=>{
    try{
    const expp=req.params.exp
    const trips = await trips.find({exp:expp});
    if(!trips){res.status(404).json({Message:"trip Not found"})}
    res.status(200).json({Message:"Trips:",trips});
    }catch(error){next(error)}
}

module.exports={
    createTrip,
    deleteTrip,
    addTripImage,
    getTripById,
    getAllTrips,
    getTripByPrice,
    getTripByCity,
    getTripByExp
}