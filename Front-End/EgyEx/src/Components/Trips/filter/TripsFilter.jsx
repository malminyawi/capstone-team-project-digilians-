import style from "./TripsFilter.module.css"

function TripsFilter() {
    return (
        <>
            <div className={`${style.textNavy} bg-white rounded-4 m-3 p-3 d-flex flex-column`}>
                <div className="d-flex justify-content-between align-items-center pt-4">
                    <div className="d-flex gap-3 ">
                        <i className="fa-solid fa-filter "></i>
                        <h5 className="fw-semibold">Filters </h5>
                    </div>
                    <button type="reset" className={` ${style.reset} fw-semibold border-0 bg-transparent  me-3`}>Reset </button>

                </div>

                <div className="my-4">
                    <label className="form-label small fw-semibold  mb-2">City</label>
                    <select className={` form-select custom-select-input ${style.filSelect}`}>
                        <option>All Cities</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="form-label small fw-semibold  mb-2">Budget</label>
                    <select className={` form-select custom-select-input ${style.filSelect}`}>
                        <option>All Budgets</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="form-label small fw-semibold  mb-2">Experience Type</label>
                    <select className={`form-select custom-select-input ${style.filSelect} `}>
                        <option>All Types</option>
                    </select>
                </div>
                <hr className="px-2" />
                <div className="small text-center" >
                    <p>Showing 8 of 8 destinations</p>
                </div>
            </div>
        </>
    )

}
export default TripsFilter;