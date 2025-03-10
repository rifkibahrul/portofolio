export const LeftAbout = () => {
    return (
        <div className="about__left w-full px-4 mb-10 lg:w-1/2">
            {/* Header */}
            <h2 className="h2 font-semibold max-w-lg mb-5 relative inline-block text-primary">
                <span className="relative inline-block">
                    <span className="relative z-10">Curious</span>
                    <span className="absolute left-0 bottom-[15%] w-full h-[15px] bg-gradient-to-t from-accent to-accent/70 -z-10"></span>
                </span>{" "}
                About Me?
            </h2>
            {/* Description */}
            {/* <p className="text-base font-light max-w-xl">
                I'm a passionate web developer with extensive experience in
                developing web applications, covering both Frontend and Backend.
                I'm dedicated to delivering great user experiences,
                user-centered designs that prioritizes clarity and usability,
                with a focus on readable code. 
                <br />
                As a progressive
                thinker, I enjoy working on products end to end, from ideation
                all the way to development.
            </p> */}
            <div className="text-base font-light max-w-xl">
                <p>
                    I'm a passionate web developer with a strong background in
                    both frontend and backend development. As a Bachelor of
                    Informatics graduate from Universitas Pembangunan Nasional
                    "Veteran" Jawa Timur, I have a deep interest in web
                    development and a constant drive to learn new things.
                </p>
                <p className="mt-2">
                    I thrive on building user-centered applications that
                    prioritize clarity, usability, and readable code. With
                    experience working in a team, I'm committed to delivering my
                    best and enjoy working on products from ideation to
                    development, ensuring a seamless and engaging user
                    experience.
                </p>
            </div>
        </div>
    );
};
