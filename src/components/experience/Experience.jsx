import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function Experience() {
    return (
        <section className="relative z-20 pt-36">
            <div className="container mx-auto">
                <div className="flex flex-wrap flex-col lg:flex-row">
                        {/* Left Content */}
                        <LeftContent />

                        {/* Right Content */}
                        <RightContent />
                </div>
            </div>
        </section>
    );
}

export default Experience;
