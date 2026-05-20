import { Link, NavLink } from "react-router-dom";
import style from "./Navbar.module.css"
import Buttongold from "../../UI/ButtonGold/Buttongold";
import Logo from "../../UI/logo/Logo";

function Navbar() {
    const links=[
        {title:"Home",path:"/"},
        {title:"Destinations",path:""},
        {title:"About",path:"/about"},
        {title:"Reviews",path:""},

    ]
  return (
    <nav className={`text-light shadow-lg ${style.nav}`}>
        <div className="container py-2 ">
            <div className=" row align-items-center ">
                {/* ---------------------------logo------------------------------- */}
               <div className="col">
                 <Logo/>
               </div>

                {/* ------------------------links-------------------------------- */}
               <nav className=" col d-flex gap-5 align-items-center">
                 {links.map((item , index)=> (
                    <NavLink to={item.path} key={index} className={`${style.links} fw-semibold`}>
                    <span >{item.title}</span>
                    </NavLink>
                ))}
                  </nav>

                {/*------------------------ login & rigster button------------------------*/}
               <div className="col text-end">
                    <Link to="/login" className={`${style.btn} text-white me-2 fw-semibold rounded-4 border-0 px-4 p-2`}>Login</Link>
                   <Link to="/register" > <Buttongold>Sign Up</Buttongold> </Link>
               </div>
            </div>
        </div>

    </nav>
  )
}
export default Navbar