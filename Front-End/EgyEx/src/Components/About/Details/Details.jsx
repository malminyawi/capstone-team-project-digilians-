
  import styles from './Details.module.css'
import CardDetails from '../../Ui/CardDetails/CardDetails';

const Details = () => {
  return (
<>
<div className={`${styles.container}   `}>
<div className={`${styles.explore}  `}>
 
<div className="d-flex justify-content-around align-items-center gap-5 mt-5 p-3"> 
<CardDetails icon="bi bi-people " title="1000+" text="Happy Travelers"/>
<CardDetails icon="bi bi-geo-alt " title="50+" text="Tours Offered"/>
<CardDetails icon="bi bi-globe" title="20+" text="Egyptian Cities"/>
<CardDetails icon="bi bi-award" title="15+" text="Awards Won"/>
</div>
</div>

</div>
</>
  )
}

export default Details
