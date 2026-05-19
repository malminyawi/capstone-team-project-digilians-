import style from "./Logo.module.css"
function Logo() {
  return (
   
        <div className="d-flex align-items-center mb-1">
                    <div className={`${style.logo}  py-1 px-3 rounded-2 me-1 fw-bold fs-4`}>E</div>
                    <span className="fw-bold">xplore Egypt</span>
        </div>

  )
}
export default Logo