const express=require("express")
const router=express.Router();
const tripController=require("../controller/Trips.Controller");
const {tripsValidation}=require("../middlewares/TripsValidtion");


router.post("/trips",tripsValidation,tripController.createTrip);
router.delete("/trips",tripController.deleteTrip);
router.put ("/trips",tripController.addTripImage);



router.get("/trips:_id",tripController.getTripById);
router.get("/trips",tripController.getAllTrips);
router.get("/trips:price",tripController.getTripByPrice);
router.get("/trips:city",tripController.getTripByCity);
router.get("/trips:exp",tripController.getTripByExp);