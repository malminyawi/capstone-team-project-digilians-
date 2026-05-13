//import joi and trips Model
const Joi=require("joi");
const {tripzModel}=require("../models/Trips.Models.js")

//apply validation
const schema=Joi.object({
    title:Joi.string().required().unique().min(3).max(15).pattern(/^[a-zA-Z0-9]/),
    description:Joi.string().required().min(10).max(50).pattern(/^[a-zA-Z0-9]/),
    img:Joi.string(),
    duration:Joi.number().required().min(1).max(2),
    rate:Joi.number().required().min(1).max(2),
    price:Joi.number().required().min(3).max(5)

});
const joiValidation=(tripzModel,schema)=>{
    const {value,error}=schema.validate(tripzModel)
}



const tripsValidation=(req,res,next)=>{

    try{
        next();
    }catch(err){next(err);}
}

