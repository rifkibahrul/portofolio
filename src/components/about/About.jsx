import { RightAbout } from "./RightAbout";
import { LeftAbout } from "./LeftAbout";

const About = () => {
    return (
        <section id="about" className="relative z-20 pt-36">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    {/* Left Content */}
                    <LeftAbout/>

                    {/* Right Content */}
                    <RightAbout/>
                </div>
            </div>
        </section>
    );
}

export default About;
