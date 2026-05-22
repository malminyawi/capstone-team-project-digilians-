import styles from "./Header.module.css"

function Header({title,desc}){
    return(
        <>
          
        <div className={`${styles.header}  text-white  `}>
            <div className="container">
            <h1 className="fw-bolder fs-1" >{title}</h1>
            <p className="fs-5">{desc}</p>
        </div>
        </div>
        </>
    )

}
export default Header;