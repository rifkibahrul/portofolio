import Marquee from "react-fast-marquee";
import { skillsData } from "./data/component";
import { useEffect, useState } from "react";

function Skills() {
    const [gradientWidth, setGradientWith] = useState(100);

    useEffect(() => {
        // Cek ukuran layar
        const handleResize = () => {
            if (window.innerWidth >= 1024) setGradientWith(500);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section id="skills" className="relative z-20 pt-36">
            <div className="container">
                {/* Text */}
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-8">
                        <h2 className="skills__text h2 font-bold text-primary">
                            What I'm{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10">Good At</span>
                                <span className="absolute left-0 bottom-[15%] w-full h-[15px] bg-gradient-to-t from-accent to-accent/70 -z-10"></span>
                            </span>
                        </h2>
                        <p className="skills__text text-primary text-base mt-3 lg:mt-5">
                            The skills, tools and technologies I am really good
                            at:
                        </p>
                    </div>
                </div>

                {/* Tech Skills */}
                {/* <div className="w-full px-4 flex flex-wrap justify-center">
                    {skillsData.map((skill) => (
                        <div
                            key={skill.id}
                            className="skills__image p-4 mb-8 md:w-1/7"
                        >
                            <h4 className="text-xl font-semibold text-primary text-center">
                                {skill.name}
                            </h4>
                            <div className="p-4 cursor-pointer ">
                                <img
                                    src={skill.img}
                                    alt={skill.name}
                                    width="100"
                                    className="w-24"
                                />
                            </div>
                        </div>
                    ))}
                </div> */}
                <div className="w-full px-4 flex flex-wrap justify-center">
                    <Marquee
                        autoFill
                        pauseOnClick
                        speed={40}
                        gradient
                        gradientColor="#222831"
                        gradientWidth={gradientWidth}
                    >
                        {skillsData.map((skill) => (
                            <div
                                key={skill.id}
                                className="skills__image p-4 mb-8 md:w-1/7"
                            >
                                <h4 className="text-xl font-semibold text-primary text-center">
                                    {skill.name}
                                </h4>
                                <div className="p-4 cursor-pointer ">
                                    <img
                                        src={skill.img}
                                        alt={skill.name}
                                        width="100"
                                        className="w-24"
                                    />
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
}
export default Skills;
