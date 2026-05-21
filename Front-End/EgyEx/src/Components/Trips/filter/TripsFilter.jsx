function TripsFilter() {
    return (
        <>
            <div className=" bg-white rounded-4 m-3 p-3 d-flex flex-column ">
                <div> <i className="fa-solid fa-filter text-dark"></i>
                    <h6>Filters </h6>
                </div>

                <div className="mb-4">
                    <label className="form-label small fw-semibold  mb-2">City</label>
                    <select className="form-select custom-select-input">
                        <option>All Cities</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="form-label small fw-semibold  mb-2">Budget</label>
                    <select className="form-select custom-select-input">
                        <option>All Budgets</option>
                    </select>
                </div>
                <div className="my-4">
                    <label className="form-label small fw-semibold  mb-2">Experience Type</label>
                    <select className="form-select custom-select-input">
                        <option>All Types</option>
                    </select>
                </div>
                <hr className="px-2" />
                <div className="  small text-align-center" >
                    <p>Showing 8 of 8 destinations</p>
                </div>
            </div>
        </>
    )

}
export default TripsFilter;