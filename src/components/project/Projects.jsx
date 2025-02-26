import DoodleImg from "../../assets/images/doodle-items.png";
import ProjectSlider from "./ProjectsSlider";

const Projects = () => {
    return (
        <section
            id="project"
            className="relative z-20 pt-36 pb-16 bg-repeat"
            style={{ backgroundImage: `url(${DoodleImg})` }}
        >
            <div className="container px-6 mx-auto">
                {/* Text */}
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-8">
                        <h2 className="project__title h2 font-bold text-primary">
                            Latest Project
                        </h2>   
                        <p className="project__subtitle text-primary text-base">
                            Here are some of the projects I have built,
                            showcasing my expertise in web development.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <ProjectSlider />
            </div>
        </section>
    );
}

export default Projects;
