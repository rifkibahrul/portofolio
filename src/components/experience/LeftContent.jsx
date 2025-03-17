import { motion } from "framer-motion";
import { experiences } from "./component/data-experience.js";

export const LeftContent = () => {
    return (
        <div className="w-full px-4">
            <motion.div
                className="w-full mx-auto justify-start"
                initial={{ opacity: 0, x: 200 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{
                    delay: 0.5,
                    type: "spring",
                }}
            >
                <h2 className="h2 font-semibold text-primary">
                    Intern{" "}
                    <span className="relative inline-block">
                        <span className="relative z-10">Experience</span>
                        <span className="absolute left-0 bottom-[15%] w-full h-[15px] bg-gradient-to-t from-accent to-accent/70 -z-10"></span>
                    </span>
                </h2>
            </motion.div>

            {/* Timeline */}
            <div className="timeline my-10 lg:my-0 md:p-10">
                {experiences.map((experience) => (
                    <div className="experience__experience timeline-wrapper" key={experience.id}>
                        <div className="timeline-yr">
                            <span>{experience.year}</span>
                        </div>
                        <div className="timeline-info">
                            <span className="text-lg lg:text-xl font-semibold text-primary">
                                {experience.name}
                            </span>
                            <h3 className="font-medium text-sm lg:text-base text-accent opacity-75 mt-1">
                                {experience.job}
                            </h3>
                            <p className="my-4 text-sm lg:text-base text-justify text-primary">
                                {experience.description}
                            </p>
                            <div className="flex flex-wrap gap-2 text-sm mt-3">
                                {Array.isArray(experience.technology) && experience.technology.map((tech) => (
                                    <div key={tech} className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
