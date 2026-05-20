 import Card from 'react-bootstrap/Card';
 import styles from './CardDetails.module.css'
function CardDetails({icon,title,text}){
    return(
<>
<div className="cards">
   <Card className={`${styles.card} `}>
      <Card.Body>

        <Card.Title className={`${styles.title} d-flex flex-column align-items-center gap-3`}>
            <i class={icon} style={{width:"50px" , backgroundColor:' #f6efd7', borderRadius:"35px",margin:"auto",padding:"6% 6.6%", color:'var(--thirdColor)'}}> </i>
          
            {title}
             </Card.Title>
       
        <Card.Text className={`${styles.text}`}>
       
         {text}
        </Card.Text>
 
      </Card.Body>
    </Card>
</div>
</>
    )
}
export default CardDetails
