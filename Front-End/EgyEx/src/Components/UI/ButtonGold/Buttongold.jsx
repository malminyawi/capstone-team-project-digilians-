import style from "./Buttongold.module.css"
 function Buttongold({children, className = "",...props}) {
  return (
    <>
        <button 
            {...props}
            className={`${style.btn} px-4 fw-semibold py-2 rounded-4 ${className}`}
        >
            {children}
        </button>
    </>
  )
}
export default Buttongold