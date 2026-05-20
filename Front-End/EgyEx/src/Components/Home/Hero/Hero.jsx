import img from "../../../assets/pyr.jpg";
import Buttongold from "../../UI/ButtonGold/Buttongold";
import Dropdown from "../../UI/Dropdown/Dropdown";
import Input from "../../UI/Input/Input";
import style from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <div className="position-relative mb-5 h-25">

       
        <img
          src={img}
          alt="photo"
          className="img-fluid w-100"
        />

    
        <div className={`${style.overlay} position-absolute text-center`}>
          <div className={`p-4 ${style.herotxt}`}>
            <h1 className={`text-light fw-bold fs-1 `}>Discover the Magic of Egypt</h1>
            <h5 className="text-light fw-semibold mt-3 fs-5">Explore ancient history, beaches, deserts, and unforgettable adventures</h5>
            <Buttongold className={`${style.herobtn} py-3  mt-4 fw-bold border-0 fs-5`}>Explore Egypt</Buttongold>
          </div>
        </div>

  <div
    className={`
      ${style.banner}
      position-absolute
      start-50
      translate-middle-x
      bg-white
      rounded-4
      shadow
      p-5
    `}
  >

    <h2 className="text-center fw-semibold fs-3 mb-5" style={{color:"var(--main-color)"}}>
      Find Your Perfect Egyptian Adventure
    </h2>

    <div className="row g-3">

      <div className="col-md-3">
        <label className="mb-2 fw-semibold">Trip Type</label>

        <Input placeholder="All Types">
          <Dropdown className="end-0"  items1="Solo" items2="Family" items3="Friends"/>
        </Input>
      </div>

      <div className="col-md-3">
        <label className="mb-2 fw-semibold">Experience Type</label>

        <Input placeholder="All Experiences">
          <Dropdown className="end-0"  items1="historical" items2="Adventure" items3="Relaxing" items4="Entertainment"/>
        </Input>
      </div>

      <div className="col-md-3">
        <label className="mb-2 fw-semibold">Budget</label>

        <Input placeholder="All Budgets">
          <Dropdown className="end-0" items1="Low" items2="Med" items3="Hiegh"/>
        </Input>
      </div>

      <div className="col-md-3 position-relative">
        <label className="mb-2 fw-semibold">Destination</label>
        <Input>
          <i className={`fa-solid fa-magnifying-glass position-absolute end-0  ${style.icon}`}></i>
        </Input>
      </div>

    </div>

    <button className={`${style.btn} w-100 mt-4 py-3 rounded-3 fw-bold`}>
      Search Adventures
    </button>
    </div>
    </div>
    </>
  );
}