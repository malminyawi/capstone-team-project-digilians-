 

import CardDetails from "../Components/Ui/CardDetails/CardDetails";
 
import HeroAbout from "../Components/About/AboutPage/HeroAbout";
import Details from "../Components/About/Details/Details";
import Mission from "../Components/About/Mission/Mission";
import Team from  "../Components/About/Team/Team";

function About (){
    return(
        <>
       <section>
        
      <HeroAbout/>
        <Details/>
       <Mission/>
       <Team/>
        </section> 
        </>
    )
}
export default About;