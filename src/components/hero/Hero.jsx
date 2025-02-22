import ProfileImg from "../../assets/images/rifki.png";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const user = {
    name: "Muhammad Rifki",
    imgUrl: ProfileImg,
};

function Hero() {
    return (
        <>
            <section id="hero" className="relative z-20 pt-36">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        {/* Left Content */}
                        <LeftContent name={user.name} />

                        {/* Right Content */}
                        <RightContent imgUrl={user.imgUrl} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;