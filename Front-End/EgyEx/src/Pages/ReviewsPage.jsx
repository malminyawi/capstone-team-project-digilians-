import AnalysisCard from "../Components/Reviews/AnalysisCard/AnalysisCard"
import ReviewsForm from "../Components/Reviews/ReviewsForm/ReviewsForm";

function Reviews(){
    return (
        <div className="">
            <div><AnalysisCard></AnalysisCard></div>
            <div className="d-flex fl">
                <div></div>
                <div>
                    <ReviewsForm></ReviewsForm>
                </div>
            </div>
        </div>
    )
}
export default Reviews;