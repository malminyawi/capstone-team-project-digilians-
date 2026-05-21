import styles from "./AnalysisCard.module.css"

function AnalysisCard(){
    return(
        <>
            <div className={`card  rounded w-75 m-auto my-5 ${styles.bottomShadow}`}>
                <div className=" d-flex justify-content-between px-5 text-center  py-3">
                    <div className="col-4">
                        <div className="d-flex flex-column justify-content-between">
                            <span className={`fs-1 fw-bolder ${styles.goldColor}`}>4.8</span>
                            
                            <div className="stars  ">
                                <i className={`fa-solid fa-star ${styles.goldColor}`}></i>
                                <i className={`fa-solid fa-star ${styles.goldColor}`}></i>
                                <i className={`fa-solid fa-star ${styles.goldColor}`}></i>
                                <i className={`fa-solid fa-star ${styles.goldColor}`}></i>
                                <i className={`fa-solid fa-star ${styles.goldColor}`}></i>
                            </div>
                            <div className="mt-1"><p className="text-secondary">Overall Rating</p></div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="d-flex flex-column">
                            <span className={`fs-1 fw-bolder `}>6</span>
                            <p className="text-secondary">Total Reviews</p>

                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <span className={`fs-1 fw-bolder ${styles.greenColor}`}>98%</span>
                            <p className={`text-secondary `}>Satisfaction Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AnalysisCard;