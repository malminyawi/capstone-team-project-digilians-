import styles from './Mission.module.css'
import img1 from '../../../assets/photo-1620966528923-fd41bcde8bc4.jpg'
function Mission (){

    return(
        <>
        <div className={`${styles.container} container-fluid mb-4 `} >
            <div className={`${styles.row}   `} >
          
                  <div className={`${styles.details} `}>
                    <div className="data">
                        <h3 className={styles.h3}>Our Mission</h3>
                        <p className={styles.p}>At Explore Egypt, our mission is to promote and celebrate Egyptian tourism by creating unforgettable experiences that showcase the rich history, vibrant culture, and natural beauty of our beloved homeland.
</p>
<p className={styles.p}>We believe that every traveler deserves to experience the magic of Egypt in an authentic, safe, and meaningful way. From the ancient pyramids to the pristine beaches of the Red Sea, we curate experiences that create lasting memories.</p>
                    </div>
              
              <div className={`${styles.icons} mt-5`}>
<div className="row gap-3">
    <div className="col-1">
        <i class="bi bi-people fs-4 " style={{width:"50px" ,height:"50px",margin:"auto",padding:"8px 14px", color:'var(--main-gold)'}}> </i>
      </div>   
   
   <div className="col-10">
    <div className="row">
        <h6>Passionate Service</h6>
    </div>
  <div className="row">
        <p>We love what we do and it shows in every detail</p>
    </div>

   </div>
</div>

<div className="row gap-3">
    <div className="col-1">
        <i class="bi bi-shield fs-4 " style={{width:"50px" ,height:"50px",margin:"auto",padding:"8px 14px", color:'#92bca2'}}> </i>
      </div>   
   
   <div className="col-10">
    <div className="row">
        <h6>Safety First</h6>
    </div>
  <div className="row">
        <p>Your safety and comfort are our top priorities</p>
    </div>

   </div>
</div>

<div className="row gap-3">
    <div className="col-1">
        <i class="bi bi-globe fs-4 " style={{width:"50px" ,height:"50px",margin:"auto",padding:"8px 14px", color:'var(--main-gold)'}}> </i>
      </div>   
   
   <div className="col-10">
    <div className="row">
        <h6>Authentic Experiences</h6>
    </div>
  <div className="row">
        <p>Real connections with Egyptian culture and heritage</p>
    </div>

   </div>
</div>

              </div>
              
              
                </div> 




                <div className={`${styles.imgBox}`}>
                        <img src={img1} alt="nile" />
                
                </div>
            </div>
        </div>
        </>
    )
}
export default Mission