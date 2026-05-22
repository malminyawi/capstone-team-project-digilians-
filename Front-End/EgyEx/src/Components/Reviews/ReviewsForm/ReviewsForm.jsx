import styles from "./ReviewsForm.module.css"

function ReviewsForm(){
return (
<div className={`${styles.formStyle}`}>
<h4 className={`${styles.fontColor} fw-bold`}>Share Your Experience</h4>    
<form action="" className="d-flex gap-4 flex-column bg-transparent">
    <div className={`${styles.inputsDivs} d-flex flex-column bg-transparent`}>
        <label htmlFor="name">Your Name</label>
        <input type="text" placeholder="Your Name" className={`${styles.inputsStyle}`} id="name"/>
    </div>
    <div className="d-flex flex-column">
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Your Email@gmail.com" className={`${styles.inputsStyle}`} id="email"/>
    </div>
    <div className={`${styles.inputsDivs} d-flex flex-column bg-transparent`}>
        <label htmlFor="destination">Destination Visited</label>
        <input type="text" placeholder="e.g. Pyramids of Giza " className={`${styles.inputsStyle}`} id="destination"/>
    </div>

    <div className="d-flex flex-column">
        <label htmlFor="rating">Rating</label>
        <div className="d-flex flex-row gap-2">

            <input type="radio"  className={`${styles.radioDisplay}`} value="1" id="star1"/>
            <label htmlFor="star1" className={``}><i className={`fa-regular fa-star ${styles.ratingStar}`}></i></label>

            <input type="radio"  className={`${styles.radioDisplay}`} value="2" id="star2"/>
            <label htmlFor="star2" className={``}><i className={`fa-regular fa-star ${styles.ratingStar}`}></i></label>

            <input type="radio"  className={`${styles.radioDisplay}`} value="3" id="star3"/>
            <label htmlFor="star3" className={``}><i className={`fa-regular fa-star ${styles.ratingStar}`}></i></label>

            <input type="radio"  className={`${styles.radioDisplay}`} value="4" id="star4"/>
            <label htmlFor="star1" className={``}><i className={`fa-regular fa-star ${styles.ratingStar}`}></i></label>

            <input type="radio"  className={`${styles.radioDisplay}`} value="5" id="star5"/>
            <label htmlFor="star5" className={``}><i className={`fa-regular fa-star ${styles.ratingStar}`}></i></label>
        </div>
    </div>
    
    
    <div className="d-flex flex-column bg-transparent">
        <label htmlFor="your reviews">Your Reviews</label>
        <input type="text-area" className={`${styles.inputsStyle}`} id="your reviews"/>
    </div>

    <button type="submit" className={` ${styles.SubmitStyle}`}>Submit Review</button>

    
</form>
</div>
);
}

export default ReviewsForm;