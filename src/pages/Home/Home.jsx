import About from "@/components/About";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import Skills from "@/components/Skill";
import ContactSection from "@/components/ContactSection";
const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Skills/>
            <Education/>
            <ProjectShowcase/>
            <ContactSection/>
        </div>
    );
};

export default Home;