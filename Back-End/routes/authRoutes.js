const express=require('express')
const router=express.Router()

const {login,register,logout}=require("../controllers/authController")
//midd
const {authMiddleware}=require('../middlewares/authMiddleware')
router.post("/register",register)
router.post("/login",login)
router.get("/logout",authMiddleware,logout)

module.exports=router