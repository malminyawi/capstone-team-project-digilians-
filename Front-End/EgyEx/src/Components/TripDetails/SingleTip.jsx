import TripCover from "./Cover/TripCover";
import TripDetails from "./info/TripDetails";
import BookingForm from "./BookingForm/BookingForm";
function SingleTrip(){
    return(<>
    <TripCover/>

    <div className="container">
        <div className="d-flex align-items-center ">
             <TripDetails/>
             <BookingForm/>
        </div>
       
    </div>
    
    </>)
}

export default SingleTrip;