import styles from './HeroAbout.module.css'
function HeroAbout (){

    return(
<>
<div className="hero">
    <div className={`${styles.imgBg}`}>
 <div className= {`${styles.details}`} >
    <h2 className={`${styles.h2}`}>About Explore Egypt</h2>
    <p className={`${styles.p}`}>Bringing the wonders of Egypt to travelers worldwide since 2015

</p>
 </div>
    </div>
</div>
</>
    )
}
export default HeroAbout 