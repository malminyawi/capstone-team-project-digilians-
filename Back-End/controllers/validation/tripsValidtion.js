//import joi and trips Model
const Joi=require("joi");
const tripzModel=require("../../models/Trips.Models.js")

//apply validation
const schema=Joi.object({
    title:Joi.string().min(3).max(15).pattern(/^[a-zA-Z0-9]/).required(),
    description:Joi.string().required().min(10).max(50).pattern(/^[a-zA-Z0-9]/),
    img:Joi.string(),
    duration:Joi.string().required().min(1).max(10),
    rate:Joi.string().required().min(0).max(1),
    price:Joi.string().required().min(3).max(5)
    //---------------------------------------------------------------> To be comtinued exprience and city
});




const tripsValidation=(req,res,next)=>{

    
    const {value,error}=schema.validate(req.body,
            {
                abortEarly:false,
                stripUnknown:true
            });
        if(error){return next(error)}
        req.body=value;
        next();
    }


module.exports=tripsValidation;