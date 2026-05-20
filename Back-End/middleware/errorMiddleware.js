const errorMiddleware=(error,req,res,next)=>{

    console.log(error);
    
    return res.status(500).json({
          message: "server error"
        })
}
module.exports=errorMiddleware