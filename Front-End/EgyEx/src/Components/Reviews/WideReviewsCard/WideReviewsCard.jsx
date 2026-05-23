function WideReviewsCard() {
    return(
    <div className="card w-75 p-4 m-4">
        <div className="d-flex flex-row justify-content-between w-100">
            <div className="reviewStars">stars</div>
            <div className="tripTitle">trip Title</div>
        </div>

        <div className="clientDetails">
            
            <div className="name">
                <h6>Sarah Johnson</h6>
                <small className="text-secondary">United States.April 15, 2026 </small>
            </div>

            

            <div className="comment">
                <p>An absolutely incredible experience! The pyramids were breathtaking and our guide was so knowledgeable. Every moment was well-organized and I felt safe throughout the entire tour. Highly recommend Explore Egypt!</p>
            </div>

            <div className="helpful">

            </div>


        </div>
    </div>
    );
}

export default WideReviewsCard;