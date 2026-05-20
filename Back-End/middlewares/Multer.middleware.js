const multer= require("multer");


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'folder destination')
    },

      filename: function (req,file,cb){
        const  uniqueName=Date.now()+'-'+Math.round(Math.random*1E9);
        cb(null, file.filename+'-'+uniqueName) ;
    }
})