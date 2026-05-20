import { NavLink } from "react-router-dom";
import Logo from "../../UI/logo/Logo"
import style from "./Footer.module.css"

function Footer() {
const links=[
        {title:"Home",path:""},
        {title:"Destinations",path:""},
        {title:"About",path:""},
        {title:"Reviews",path:""},
    ]

const contact=[
        {icon:" fa-location-dot",title:"Cairo, Egypt",path:""},
        {icon:" fa-phone",title:"+20 123 456 7890",path:""},
        {icon:" fa-envelope",title:"info@exploreegypt.com",path:""},
    ]

const follow =[
        {icon:" fa-facebook-f",path:""},
        {icon:" fa-instagram",path:""},
        {icon:" fa-twitter",path:""},
    ]
  return (
    <>
    <div className={`text-light ${style.footer}`}>
        <div className="container py-5 ">
            <div className="row my-2">
                <div className="col-4">
                    <Logo></Logo>
                    <span className={`${style.para}`}>Discover the magic of Egypt with unforgettable travel experiences.</span>
                </div>

                <div className="col-8">

                <div className="row  ">

                <div className="col">
                    <div className="row align-items-center text-start px-1">
                        <span className={`${style.title} fw-semibold mb-2`}>Quick Links</span>
                        {links.map((item , index)=> (
                                <NavLink to={item.path} key={index} className={`${style.links} `}>
                                    <span >{item.title}</span>
                                </NavLink>
                            ))}
                    </div>
                </div>

                <div className="col">
                    <div className=" row align-items-center text-start">
                        <span className={`${style.title} fw-semibold  mb-2`}>Contact</span>
                        {contact.map((item , index)=> (
                            
                                <NavLink to={item.path} key={index} className={`${style.links}  d-flex align-items-center`}>
                                    <i className={`fa-solid ${item.icon} me-2`}></i>
                                    <span >{item.title}</span>
                                </NavLink>
                            ))}
                    </div>
                </div> 

                <div className="col">
                    <div className="row" >
                        <span className={`${style.title} fw-semibold mb-2`}>Follow Us</span> 
                        <div className="d-felx text-start ">
                        {follow.map((item , index)=> (
                                <NavLink to={item.path} key={index} className={`me-1 ${style.icon} p-2 rounded `}>
                                    <i className={`fa-brands ${item.icon} `}></i>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
        
                </div>

                </div>
            </div>
                
            <div className={`my-3 ${style.border}`}></div>

            <div className="text-center my-2">
                <span className={`${style.para}`}>© 2026 Explore Egypt. All rights reserved.</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer