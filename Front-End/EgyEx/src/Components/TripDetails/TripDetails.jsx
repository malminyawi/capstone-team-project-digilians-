import CardInfo from "../UI/CardInfo/CardInfo";
import style from './TripDetails.module.css'
function TripDetails() {

    return (
        <><div className="tripInfo mt-5">
            <CardInfo title="About This Experience">
                <p>Experience the wonder of the ancient world with a guided tour of the Great Pyramids of Giza and the Sphinx. Walk in the footsteps of pharaohs and discover the secrets of these magnificent monuments that have stood for over 4,500 years.</p>
            </CardInfo>

            <CardInfo title="What's Included">
                <div className="row d-flex ">
                    <div className="col-md-6">
                        <div className="d-flex align-items-center mb-3">
                            <i className="fa-regular fa-circle-check text-success me-2"></i> Expert Guide
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <i className="fa-regular fa-circle-check text-success me-2"></i> Entrance Fees
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <i className="fa-regular fa-circle-check text-success me-2"></i> Lunch
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex align-items-center mb-3">
                            <i className="fa-regular fa-circle-check text-success me-2"></i> Transportation
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <i className="fa-regular fa-circle-check text-success me-2"></i> Camel Ride
                        </div>
                    </div>
                </div>


            </CardInfo>
            <CardInfo title="Nearby Attractions">
                <div className={`row  ${style.loc}`}>
                    <div className="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-location-dot"></i> Egyptian Museum
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-location-dot"></i> Egyptian Museum
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-location-dot"></i> Egyptian Museum
                    </div>
                </div>


            </CardInfo>
        </div>




        </>)
}
export default TripDetails;