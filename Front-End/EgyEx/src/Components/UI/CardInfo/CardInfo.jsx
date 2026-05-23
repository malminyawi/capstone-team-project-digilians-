import style from "./CardInfo.module.css"

function CardInfo({title,children}){
    return(<>
    <div className={`${style.textNavy} bg-white shadow-sm rounded-4 m-3 p-3 d-flex flex-column`}>
        <h3 className="fw-bold my-3">{title}</h3>
        <div >{children}</div>
    </div>
     
    
    </>)
}
export default CardInfo;