export const RightContent = () => {
    return (
        <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-xl mx-auto my-8 lg:mt-0">
                <h2 className="h2 font-semibold text-primary">
                    <span className="relative inline-block">
                        <span className="relative z-10">Education</span>
                        <span className="absolute left-0 bottom-[15%] w-full h-[15px] bg-gradient-to-t from-accent to-accent/70 -z-10"></span>
                    </span>{" "} History
                </h2>
            </div>

            {/* Timeline */}
            <div className="timeline">
                <div className="experience__experience timeline-wrapper">
                    <div className="timeline-yr">
                        <span>2020-2024</span>
                    </div>
                    <div className="timeline-info">
                        <span className="text-lg font-semibold text-color4">
                            Universitas Pembangunan Nasional "Veteran" Jawa
                            Timur
                        </span>
                        <h3 className="font-medium text-sm text-color4 italic opacity-75 mt-1 mb-1">
                            Bachelor Degree in Computer Science
                        </h3>
                        <ul className="list-disc ml-4">
                            <li className="text-base font-light text-color4">
                                GPA: 3.79/4.00
                            </li>
                            <li className="text-base font-light text-color4">
                                Obtained Junior Web Programmer and Junior Web
                                Developer competency certificates from BNSP
                                (National Professional Certification Agency).
                            </li>
                            <li className="text-base font-light text-color4">
                                Scored 450 English Proficiency Test.
                            </li>
                            <li className="text-base font-light text-color4">
                                Development of a Machine Learning Model for
                                Cayenne Pepper Maturity Classification as a
                                Thesis Proposal
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="experience__experience timeline-wrapper">
                    <div className="timeline-yr">
                        <span>2023</span>
                    </div>
                    <div className="timeline-info">
                        <span className="text-lg font-semibold text-color4">
                            Vocational School Graduate Academy Digital Talent
                            Scholarship BPSDMP Kominfo Surabaya
                        </span>
                        <h3 className="font-medium text-sm text-color4 italic opacity-75">
                            Junior Web Developer
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};
