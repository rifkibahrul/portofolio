import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
    RiGithubFill,
    RiArrowLeftLine,
    RiArrowRightLine,
} from "@remixicon/react";
import { projects } from "./component/data";
import { useState, useEffect } from "react";

// CSS Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectSlider = () => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const updateNavigation = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <div className="project__bg bg-lighDark bg-opacity-65 shadow-lg rounded-[70px] min-h-[80vh] flex flex-col justify-center py-12">
            <div className="container p-16 mx-auto">
                <Swiper
                    modules={[Navigation, Pagination]}
                    loop={false}
                    slidesPerView={1}
                    centeredSlides={true}
                    spaceBetween={20}
                    onSwiper={updateNavigation}
                    onSlideChange={updateNavigation}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: ".button-next",
                        prevEl: ".button-prev",
                    }}
                    className="project__slider swiper-container relative"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={project.id}>
                            <div className="items-center justify-center flex flex-col xl:flex-row xl:gap-[30px]">
                                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                                    <div className="flex flex-col gap-6">
                                        {/* Project Number */}
                                        <div className="text-8xl font-extrabold text-transparent mt-5 number">
                                            {`0${index + 1}`}
                                        </div>
                                        {/* Project Title */}
                                        <h2 className="font-bold leading-none text-[42px] text-primary transition-all duration-500 capitalize">
                                            {project.name}
                                        </h2>
                                        {/* Project Description */}
                                        <p className="w-full text-base text-primary opacity-95">
                                            {project.description}
                                        </p>
                                        <p className="flex flex-wrap gap-4 text-lg font-bold text-accent">
                                            {project.technology}
                                        </p>
                                        {/* Border */}
                                        <div className="border border-white/20"></div>
                                        {/* GitHub Link */}
                                        <div className="group">
                                            <a
                                                href={project.repository}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="relative inline-block"
                                            >
                                                <RiGithubFill className="size-12" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* Project Image */}
                                <div className="w-full xl:w-[45%]">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="rounded-lg p-0 lg:rounded-t-3xl md:rounded-t-3xl sm:rounded-t-3xl"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-pagination !relative mt-8"></div>
                </Swiper>
                <div className="relative w-full mt-8 flex justify-end gap-4 pr-6">
                    <button
                        className={`button-prev w-12 h-12 rounded-full shadow-lg transition-colors flex items-center justify-center ${
                            isBeginning
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-white hover:bg-gray-300"
                        }`}
                        disabled={isBeginning}
                    >
                        <RiArrowLeftLine className="size-6 text-gray-800" />
                    </button>
                    <button className={`button-next w-12 h-12 rounded-full shadow-lg transition-colors flex items-center justify-center ${
                            isEnd
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-white hover:bg-gray-300"
                        }`}
                        disabled={isEnd}>
                        <RiArrowRightLine className="size-6 text-gray-800" />
                    </button>
                </div>
                {/* <div className="relative w-full mt-8 flex justify-end gap-4 pr-6">
                    <button
                        className={`button-prev w-12 h-12 rounded-full shadow-lg transition-colors flex items-center justify-center ${
                            isBeginning
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-white hover:bg-gray-300"
                        }`}
                        disabled={isBeginning}
                    >
                        <RiArrowLeftLine className="size-6 text-gray-800" />
                    </button>
                    <button className={`button-next w-12 h-12 rounded-full shadow-lg transition-colors flex items-center justify-center ${
                            isEnd
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-white hover:bg-gray-300"
                        }`}
                        disabled={isEnd}>
                        <RiArrowRightLine className="size-6 text-gray-800" />
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default ProjectSlider;
