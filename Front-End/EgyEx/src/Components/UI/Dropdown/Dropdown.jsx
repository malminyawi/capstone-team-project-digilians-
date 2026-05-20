import style from "./Dropdown.module.css"
export default function Dropdown({className="",items1,items2,items3,items4}) {
  return (
    <>
      <button
        className={`${style.btn} border-0 dropdown-toggle position-absolute ${className}`}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      ></button>

      <ul className="dropdown-menu dropdown-menu-end">
        <li><a className="dropdown-item" href="#">{items1}</a></li>
        <li><a className="dropdown-item" href="#">{items2} </a></li>
        <li><a className="dropdown-item" href="#">{items3} </a></li>
        <li><a className="dropdown-item" href="#">{items4} </a></li>
      </ul>
    </>
  )
}
