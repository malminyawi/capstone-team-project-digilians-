import styles from './Mission.module.css'
import img1 from '../../../assets/photo-1620966528923-fd41bcde8bc4.jpg'
function Mission (){

    return(
        <>
        <div className="container mb-4">
            <div className={`${styles.row} row  `} >
          
                  <div className="col-12 col-md-5">
                    <div className="data">
                        <h3 className={styles.h3}>Our Mission</h3>
                        <p>At Explore Egypt, our mission is to promote and celebrate Egyptian tourism by creating unforgettable experiences that showcase the rich history, vibrant culture, and natural beauty of our beloved homeland.

We believe that every traveler deserves to experience the magic of Egypt in an authentic, safe, and meaningful way. From the ancient pyramids to the pristine beaches of the Red Sea, we curate experiences that create lasting memories.</p>
                    </div>
                </div> 
                <div className="col-12 col-md-5">
                    <div className={styles.img}>
                        <img src={img1} alt="nile" />
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}
export default Mission