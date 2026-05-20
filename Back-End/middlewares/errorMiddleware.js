const errorMiddleware=(error,req,res,next)=>{

    console.log(error.stack)
    return res.status(500).json({
          message: "server error"
        })
}
module.exports=errorMiddleware