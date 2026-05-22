import TripsFilter from "../filter/TripsFilter";
import CardDestinations from "../../../Components/UI/CardDestinations/CardDestinations"
import pyramids from '../../../assets/image.png'
import nile from '../../../assets/photo-1716639154156-db53b75a22ad.jpg'
import luxor from '../../../assets/photo-1675372802255-1dea0a7add1a.jpg'

function DestinatioContent() {
    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-12 col-md-3"> <TripsFilter />  </div>
                    <div className="col-12 col-md-9">
                        <div className="row">
                            <div className="col-md-6 my-4">
                            <CardDestinations price="950" img={luxor} location="Luxor" title="Luxor Temple Complex" text="Ancient temples and history" time="Full Day" rate="4.8" number="855" />

                            </div>
                            <div className="col-md-6 my-4">
                                <CardDestinations price="850" img={pyramids} location="Cairo" title="Pyramids of Giza" text=" Ancient Wonders of the Word" time="Full Day" rate="4.9" number="1234" />

                            </div>
                            <div className="col-md-6 my-4">

                                <CardDestinations price="850" img={pyramids} location="Cairo" title="Pyramids of Giza" text=" Ancient Wonders of the Word" time="Full Day" rate="4.9" number="1234" />
                            </div>
                            <div className="col-md-6 my-4">

                                <CardDestinations price="950" img={luxor} location="Luxor" title="Luxor Temple Complex" text="Ancient temples and history" time="Full Day" rate="4.8" number="855" />

                            </div>
                        </div>
                    </div></div>

            </div></>
    )
}

export default DestinatioContent;