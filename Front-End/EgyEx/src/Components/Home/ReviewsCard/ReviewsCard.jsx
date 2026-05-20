import styles from './ReviewsCard.module.css'
import { Card } from 'react-bootstrap'
function ReviewsCard(){
    return(
        <>
    <div className={`${styles.container}   `}>
<div className={`${styles.review}  `}>
<div className={`${styles.reviewDetails}  `}>
  <h2 className={`${styles.h2}`}>What Travelers Say</h2>
    <p className={`${styles.p}`}>Read reviews from our happy customers</p>
</div >
<div className= {`   d-flex gap-5 align-items-center justify-content-around`} >
   <Card className= {`${styles.card}` }>
      <Card.Body>

        <Card.Title className={`${styles.title} d-flex flex-column align-items-left gap-3`}>
       <div className="icons"> <i class="bi bi-star-fill" style={{color:"var(--main-gold)"}}></i>
           <i class="bi bi-star-fill" style={{color:"var(--main-gold)"}}></i>
           <i class="bi bi-star-fill" style={{color:"var(--main-gold)"}}></i>
            <i class="bi bi-star-fill" style={{color:"var(--main-gold)"}}></i>
            <i class="bi bi-star-fill" style={{color:"var(--main-gold)"}}></i>
          </div>  
          <p className={`${styles.pargraph}`}>
          "An absolutely incredible experience! The pyramids were breathtaking and our guide was so knowledgeable. Highly recommend!"
</p>
             </Card.Title>
       
        <Card.Text className={`${styles.text} d-flex justify-content-between align-items-center gap-2`}>
         <i class="bi bi-people fs-4 " style={{width:"50px" ,height:"50px", backgroundColor:' #f6efd7', borderRadius:"35px",margin:"auto",padding:"8px 14px", color:'var(--main-gold)'}}> </i>
        <div className="user flex-grow-1 mt-4 d-flex flex-column justify-content-between align-items-left gap-0">
            <h6>Sarah Johnson</h6>
            <p>United States</p>
        </div>
        </Card.Text>
 
      </Card.Body>
    </Card>

 <Card className={`${styles.card}`}>
      <Card.Body>

        <Card.Title className={`${styles.title} d-flex flex-column align-items-left gap-3`}>
       <div className="icons"> <i class="bi bi-star-fill" style={{color:"var(--main-gold)"}}></i>
           <i class="bi bi-star-fill" style={{color:"var(--main-gold)"}}></i>
           <i class="bi bi-star-fill" style={{color:"var(--main-gold)"}}></i>
            <i class="bi bi-star-fill" style={{color:"var(--main-gold)"}}></i>
            <i class="bi bi-star-fill" style={{color:"var(--main-gold)"}}></i>
          </div>  
          <p className={`${styles.pargraph}`}>
          "An absolutely incredible experience! The pyramids were breathtaking and our guide was so knowledgeable. Highly recommend!"
</p>
             </Card.Title>
       
        <Card.Text className={`${styles.text} d-flex justify-content-between align-items-center gap-2`}>
         <i class="bi bi-people fs-4 " style={{width:"50px" ,height:"50px", backgroundColor:' #f6efd7', borderRadius:"35px",margin:"auto",padding:"8px 14px", color:'var(--main-gold)'}}> </i>
        <div className="user flex-grow-1 mt-4 d-flex flex-column justify-content-between align-items-left gap-0">
            <h6>Sarah Johnson</h6>
            <p>United States</p>
        </div>
        </Card.Text>
 
      </Card.Body>
    </Card>

     <Card className={`${styles.card}`}>
      <Card.Body>

        <Card.Title className={`${styles.title} d-flex flex-column align-items-left gap-3`}>
       <div className="icons"> <i class="bi bi-star-fill" style={{color:"var(--main-gold)"}}></i>
           <i class="bi bi-star-fill" style={{color:"var(--main-gold)"}}></i>
           <i class="bi bi-star-fill" style={{color:"var(--main-gold)"}}></i>
            <i class="bi bi-star-fill" style={{color:"var(--main-gold)"}}></i>
            <i class="bi bi-star-fill" style={{color:"var(--main-gold)"}}></i>
          </div>  
          <p className={`${styles.pargraph}`}>
          "An absolutely incredible experience! The pyramids were breathtaking and our guide was so knowledgeable. Highly recommend!"
</p>
             </Card.Title>
       
        <Card.Text className={`${styles.text} d-flex justify-content-between align-items-center gap-2`}>
         <i class="bi bi-people fs-4 " style={{width:"50px" ,height:"50px", backgroundColor:' #f6efd7', borderRadius:"35px",margin:"auto",padding:"8px 14px", color:'var(--main-gold)'}}> </i>
        <div className="user flex-grow-1 mt-4 d-flex flex-column justify-content-between align-items-left gap-0">
            <h6>Sarah Johnson</h6>
            <p>United States</p>
        </div>
        </Card.Text>
 
      </Card.Body>
    </Card>

</div>
<button className={`${styles.btn} mt-5`}>Read All Reviews</button>
</div>

</div>
    </>
    

)
}
export default ReviewsCard