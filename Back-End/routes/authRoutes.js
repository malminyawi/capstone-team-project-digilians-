const express=require('express')
const router=express.Router()

const {login,register,logout}=require("../controllers/auhController")
//midd
const {authMiddleware}=require('../middleware/authMiddleware')
router.post("/register",register)
router.post("/login",login)
router.get("/logout",authMiddleware,logout)

module.exports=router