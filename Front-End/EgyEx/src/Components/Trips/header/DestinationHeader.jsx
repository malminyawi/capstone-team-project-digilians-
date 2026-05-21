import styles from "./DestinationHeader.module.css"

function DestinationHeader(){
    return(
        <>
          
        <div className={  `${styles.header}  text-white  `}>
            <div className="container">
            <h1 className="fw-bolder fs-1" >Explore Destinations</h1>
            <p className="fs-5">Discover 8 amazing places in Egypt</p>
        </div></div>
        </>
    )

}
export default DestinationHeader;