function LeftContent() {
    return (
        <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-xl mx-auto mb-8">
                <h2 className="h2 font-bold text-primary">
                    Professional <span className="">Experience</span>
                </h2>
            </div>

            {/* Timeline */}
            <div className="timeline">
                <div className="experience__experience timeline-wrapper">
                    <div className="timeline-yr">
                        <span>2023</span>
                    </div>
                    <div className="timeline-info">
                        <span className="text-lg font-semibold text-color4">
                            Badan Pemeriksa Keuangan Perwakilan Provinsi Jawa
                            Timur
                        </span>
                        <h3 className="font-medium text-sm text-color4 italic opacity-75">
                            Web Developer Intern
                        </h3>
                        <ul className="list-disc ml-4">
                            <li className="text-base font-light text-color4">
                                Create a web-based application with the name
                                SIPERU using HTML, PHP, CSS, and Bootstrap.
                            </li>
                            <li className="text-base font-light text-color4">
                                Creating UI/UX for a web-based application
                                called SIPERU using Figma
                            </li>
                            <li className="text-base font-light text-color4">
                                Created and designed a database using MySQL for
                                the SIPERU web-based application.
                            </li>
                        </ul>
                        <h3 className="text-[16px] font-bold ml-[15px] text-color4 mt-2">
                            Tools :
                            <span className="text-color3">
                                {" "}
                                HTML, PHP, CSS, Bootstrap, MySql
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="experience__experience timeline-wrapper">
                    <div className="timeline-yr">
                        <span>2022</span>
                    </div>

                    <div className="timeline-info">
                        <span className="text-lg font-semibold text-color4">
                            MATCHING FUND IOS PARK CV. WASTU KENCANA TEKNIK
                        </span>
                        <h3 className="font-medium text-sm text-color4 italic opacity-75 mt-1 mb-1">
                            Machine Learning Intern
                        </h3>
                        <ul className="list-disc ml-4">
                            <li className="text-base font-light text-color4">
                                Studying the development of machine learning for
                                automatic gate control purposes.
                            </li>
                            <li className="text-base font-light text-color4">
                                Designing a Smart Parking System with Parking
                                Quota Calculation Features.
                            </li>
                        </ul>
                        <h3 className="text-[16px] font-bold ml-[15px] text-color4 mt-2">
                            Tools : <span className="text-color3">Python</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftContent;