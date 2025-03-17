import { motion } from "framer-motion";

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
                <div className="experience__experience timeline-wrapper">
                    <div className="timeline-yr">
                        <span>2023</span>
                    </div>
                    <div className="timeline-info">
                        <span className="text-lg lg:text-xl font-semibold text-primary">
                            Badan Pemeriksa Keuangan Perwakilan Provinsi Jawa
                            Timur
                        </span>
                        <h3 className="font-medium text-sm lg:text-base text-primary italic opacity-75">
                            Web Developer Intern
                        </h3>
                        <p className="my-4 text-sm lg:text-base text-justify font-light text-primary">
                            Responsible for building web applications to create
                            a seamless room reservation process. Coordinating
                            with other teams to analyze the system requirements
                            to create an effective room reservation process.
                        </p>
                        <div className="flex flex-wrap gap-2 text-sm mt-3">
                            <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                                HTML
                            </div>
                            <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                                PHP
                            </div>
                            <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                                CSS
                            </div>
                            <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                                Bootstrap
                            </div>
                            <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                                MySql
                            </div>
                        </div>
                    </div>
                </div>
                <div className="experience__experience timeline-wrapper">
                    <div className="timeline-yr">
                        <span>2022</span>
                    </div>

                    <div className="timeline-info">
                        <span className="text-lg font-semibold text-primary">
                            MATCHING FUND IOS PARK CV. WASTU KENCANA TEKNIK
                        </span>
                        <h3 className="font-medium text-sm text-primary italic opacity-75 mt-1 mb-1">
                            Machine Learning Intern
                        </h3>
                        <p className="my-4 text-sm lg:text-base text-justify font-light text-primary">
                            Studying and smulating an automatic gate control system that enables to open and close based on vehicle recognition. Developing an Intelligent Parking System with a Parking Quota Calculation feature that leverages CCTV data to optimize parking management. 
                        </p>
                        <div className="flex flex-wrap gap-2 text-sm mt-3">
                            <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                                Python
                            </div>
                            <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                                Pandas
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
