import { Card ,Button } from 'react-bootstrap'
import pyramids from '../../../assets/image.png'
import nile from '../../../assets/photo-1716639154156-db53b75a22ad.jpg'
import luxor from '../../../assets/photo-1675372802255-1dea0a7add1a.jpg'
import CardDestinations from '../../UI/CardDestinations/CardDestinations'
import styles from './Destanitions.module.css'
import Buttongold from '../../UI/ButtonGold/Buttongold'
function Destanitions(){
return(
<>
<div className={`${styles.container} container mt-5 my-4 `}>
<div className={styles.destanitions}>
  {/* Head of Destanititons */}
  <div className={`${styles.destanitionHead} text-center`}>
    <h2>Featured Destinations</h2>
    <p>Discover the most popular Egyptian experiences</p>
  </div>
  {/* Cards */}
  <div className="cards">

    <div className="row gab-5 mb-5">
      <CardDestinations price="850" img={pyramids} location="Cairo" title="Pyramids of Giza" text=" Ancient Wonders of the Word" time="Full Day" rate="4.9" number="1234"/>
        <CardDestinations price="950" img={luxor} location="Luxor" title="Luxor Temple Complex" text="Ancient temples and history" time="Full Day" rate="4.8" number="855"/>
          <CardDestinations price="760" img={nile} location="Cairo" title="Luxury Nile Cruise" text=" Luxury river adventure" time="Full Day" rate="4.9" number="925"/>
     
    </div>

        <div className="row gab-5">
     <CardDestinations price="850" img={pyramids} location="Cairo" title="Pyramids of Giza" text=" Ancient Wonders of the Word" time="Full Day" rate="4.9" number="1234"/>
        <CardDestinations price="950" img={luxor} location="Luxor" title="Luxor Temple Complex" text="Ancient temples and history" time="Full Day" rate="4.8" number="855"/>
          <CardDestinations price="760" img={nile} location="Cairo" title="Luxury Nile Cruise" text=" Luxury river adventure" time="Full Day" rate="4.9" number="925"/>

    </div>
  </div>
  
 <Buttongold className={`${styles.btnMore} `}>Veiw All Details</Buttongold>
</div>
</div>

</>




)

}
export default Destanitions