import Card from 'react-bootstrap/Card';
import styles from './Team.module.css'
import female1 from '../../../assets/female1.jpg'
import female2 from '../../../assets/female2.jpg'
import man1 from '../../../assets/man1.jpg'
import man2 from '../../../assets/man2.jpg'

function Team(){
    return(
<>
<section className='mb-3'>
<div className="container p-5">
    <div className={`${styles.team} text-center mb-5`}>
        <h2>Meet Our Team</h2>
        <p>Passionate experts dedicated to creating your perfect Egyptian adventure</p>
      </div>
<div className={`${styles.cards} row  `}>
   <div className='col-12 col-md-3'>
    <Card style={{ width: '18rem', textAlign:"center", hight:"8rem" , borderRadius:'15px'} }>
      <Card.Img variant="top" src={man1} />
      <Card.Body>
        <Card.Title>Ahmed Hassan</Card.Title>
        <Card.Text className={styles.text}>
          Founder & CEO
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>

    <div className='col-12 col-md-3'>
    <Card style={{ width: '18rem' , textAlign:"center", hight:"8rem", borderRadius:'15px' }}>
      <Card.Img variant="top"  src={female1}  />
      <Card.Body>
        <Card.Title>Layla Mohamed</Card.Title>
        <Card.Text className={styles.text}>
         Head of Operations
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    <div className='col-12 col-md-3'>
    <Card style={{ width: '18rem', textAlign:"center", hight:"8rem", borderRadius:'15px' }}>
      <Card.Img variant="top" src={man2}  />
      <Card.Body>
        <Card.Title>Omar Khalil</Card.Title>
        <Card.Text className={styles.text}>
         Lead Tour Guide
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    <div className='col-12 col-md-3'>
    <Card style={{ width: '18rem' , textAlign:"center", hight:"8rem", borderRadius:'15px' }}>
      <Card.Img variant="top"  src={female2}  />
      <Card.Body>
        <Card.Title>Fatima Ali</Card.Title>
        <Card.Text className={styles.text}>
         Customer Experience
        </Card.Text>
     
      </Card.Body>
    </Card>
    </div>
</div>
    </div>
    </section>
</>
    )
}
export default Team;