import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

import CardDetails from "../Components/Ui/CardDetails/CardDetails";
 
import HeroAbout from "../Components/About/AboutPage/HeroAbout";
import Details from "../Components/About/Details/Details";
import Mission from "../Components/About/Mission/Mission";

function About (){
    return(
        <>
       <section>
        
      <HeroAbout/>
        <Details/>
       
        </section> 
        </>
    )
}
export default About;