import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import styles from './CardDestinations.module.css'
function CardDestinations({ id, price, img, location, title, text, time, rate, number }) {
  return (

    <div className='col-12 col-md-4'>
      <Card className={`${styles.card}`}  >
        <span className={`${styles.price}`}>${price}</span>
        <Card.Img variant="top" src={img} width={"22rem"} height={"220rem"} style={{ borderRadius: "20px 20px 0 0" }} />
        <span className={styles.location}><i class="bi bi-geo-alt"></i> {location}</span>
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <Card.Text style={{ color: "var(--secondColor)", fontSize: "16px" }}>
            {text}
          </Card.Text>
          <div className={styles.details}>
            <p className={`${styles.time}`}><i class="bi bi-clock"></i> {time}</p>
            <p className={`${styles.rate}`}><i class="bi bi-star-fill "></i> {rate} <span className='number'>({number})</span></p>
          </div>
          {/* <Link to={`/destinations/${id}`} className={`${styles.btn} w-100 text-white`}>
            View Details
          </Link> */}

          {/* just for test */}
            <Link to={`/tripDetails`} className={`${styles.btn} d-block text-center text-white px-5 rounded-pill py-2 `}>
            View Details
          </Link>

        </Card.Body>
      </Card>
    </div>

  )
}
export default CardDestinations;