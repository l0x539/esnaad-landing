import AboutCompanySection from "../layouts/AboutCompanySection";
import AboutSection from "../layouts/AboutSection";
import ConsultationSection from "../layouts/ConsultationSection";
import HeroSection from "../layouts/HeroSection";
import PlansSection from "../layouts/PlansSection";
import ServiceSection from "../layouts/ServiceSection";


const LandingPage = () => {
    return <div className="cursor-default">
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <PlansSection />
        <AboutCompanySection /> 
        <ConsultationSection/>
    </div>;
};

export default LandingPage;