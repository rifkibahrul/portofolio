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
                            Latest {" "}
                            <span className="relative inline-block">
                                <span className="relative z-10">Project</span>
                                <span className="absolute left-0 bottom-[15%] w-full h-[15px] bg-gradient-to-t from-accent to-accent/70 -z-10"></span>
                            </span>
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
};

export default Projects;
