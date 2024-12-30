import AboutSection from "./AboutSection";
import AcademicCalendar from "./AcademicCalendar";
import AcademicHighlights from "./AcademicHighlights";
import HeroSection from "./HeroSection";
import QuickLinks from "./QuickLinks";
import Testimonials from "./Testimonials";

const Home = () => {
    return (<>
   < HeroSection/>
   <AboutSection/>
   <AcademicHighlights/>
   <AcademicCalendar/>
   <Testimonials/>
   <QuickLinks/>
    </>  );
}
 
export default Home;