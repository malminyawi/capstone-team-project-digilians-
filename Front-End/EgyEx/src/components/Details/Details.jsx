
  import styles from './Details.module.css'
import CardDetails from '../../ui/CardDetails/CardDetails';

const Details = () => {
  return (
<>
<div className={`${styles.container}  mt-5 `}>
<div className={`${styles.explore}  `}>
<div className={`${styles.exploreDetails}  `}>
  <h2 className={`${styles.h2}`}>Why Choose Explore Egypt?</h2>
    <p className={`${styles.p}`}>Your trusted partner for authentic Egyptian experiences</p>
</div >
<div className="d-flex justify-content-around align-items-center gap-4 mt-5"> 
<CardDetails icon="bi bi-award" title="Expert Guides" text="Licensed Egyptologists and local experts"/>
<CardDetails icon="bi bi-shield" title="Safe & Secure" text="Fully insured with 24/7 support"/>
<CardDetails icon="bi bi-hand-thumbs-up" title="Best Value" text="Competitive prices with no hidden fees"/>
<CardDetails icon="bi bi-headphones" title="24/7 Support" text="Always here to help you"/>
</div>
</div>

</div>
</>
  )
}

export default Details
