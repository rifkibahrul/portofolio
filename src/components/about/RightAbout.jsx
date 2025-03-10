import {
    RiInstagramFill,
    RiMailFill,
    RiGithubFill,
    RiLinkedinFill,
} from "@remixicon/react";

export const RightAbout = () => {
    return (
        <div className="about__right w-full px-4 lg:w-1/2">
            {/* Header */}
            <h3 className="h3 font-semibold text-primary mb-5 lg:pt-6">
                Find Me On
            </h3>
            {/* Description */}
            <p className="text-base text-primary font-light mb-6">
                You can connect with me on various social media and professional
                platforms, i'm excited to share my experiences and projects with
                you.
            </p>
            {/* Icons */}
            <div className="flex flex-row items-center gap-2 justify-start">
                <a
                    href="mailto:rifkibahrululum@gmail.com"
                    target="_blank"
                    className="border-icons"
                >
                    <RiMailFill className="about-icons" />
                </a>
                <a
                    href="https://github.com/rifkibahrul"
                    target="_blank"
                    className="border-icons"
                >
                    <RiGithubFill className="about-icons" />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-rifki-bahrul-ulum/" target="_blank" className="border-icons">
                    <RiLinkedinFill className="about-icons" />
                </a>
            </div>
        </div>
    );
}
