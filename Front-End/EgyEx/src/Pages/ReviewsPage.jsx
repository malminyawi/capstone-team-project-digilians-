import AnalysisCard from "../Components/Reviews/AnalysisCard/AnalysisCard"
import ReviewsForm from "../Components/Reviews/ReviewsForm/ReviewsForm";
import WideReviewsCard from "../Components/Reviews/WideReviewsCard/WideReviewsCard";
import axios from "axios";
function Reviews(){
    return (
        <div className="">
            <div><AnalysisCard></AnalysisCard></div>
            <div className="d-flex flex-row gap-1">
                <div>
                    <WideReviewsCard></WideReviewsCard>
                </div>
                <div>
                    <ReviewsForm></ReviewsForm>
                </div>
            </div>
        </div>
    )
}
export default Reviews;