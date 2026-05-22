const express = require("express")
const route = express.Router()
const Review = require("../models/Review.Models")
const { createReview } = require("../controllers/reviewController");
const {authMiddleware}=require('../middlewares/authMiddleware')
route.post("/add",authMiddleware,createReview)

module.exports = route