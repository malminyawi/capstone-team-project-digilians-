const express=require("express")
const router=express.Router();
const tripController=require("../controllers/tripsController");
const tripsValidation=require("../controllers/validation/tripsValidtion");

//admins
router.post("/trips",tripsValidation,tripController.createTrip);
router.delete("/trips/:_id",tripController.deleteTrip);
router.put ("/trips",tripController.addTripImage);


//users
router.get("/trips/:_id",tripController.getTripById);
router.get("/trips",tripController.getAllTrips);
router.get("/trips/:price",tripController.getTripByPrice);
router.get("/trips/:city",tripController.getTripByCity);
router.get("/trips/:exp",tripController.getTripByExp);

module.exports=router;