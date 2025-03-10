export const RightContent = ({ imgUrl }) => {
    return (
        <div className="hero__img w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10">
                {/* Img Profile */}
                <img
                    src={imgUrl}
                    alt="profile"
                    className="max-w-full rounded-full mx-auto"
                />

                {/* Background Profile */}
                <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2">
                    <svg
                        width="400"
                        height="400"
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#1e293b"
                            d="M44.9,-78.5C57.9,-70.2,67.9,-57.6,75,-43.8C82.1,-30,86.3,-15,87.6,0.8C88.9,16.5,87.5,33.1,80.3,46.8C73.2,60.6,60.4,71.5,46,78.1C31.7,84.8,15.9,87.2,0.3,86.7C-15.3,86.2,-30.5,82.8,-44.3,75.8C-58.1,68.8,-70.3,58.2,-78.7,45C-87.1,31.8,-91.7,15.9,-92.3,-0.3C-92.8,-16.6,-89.5,-33.1,-81.2,-46.6C-72.9,-60,-59.8,-70.4,-45.4,-77.9C-31.1,-85.3,-15.5,-90,0.2,-90.3C15.9,-90.7,31.9,-86.8,44.9,-78.5Z"
                            transform="translate(100 100) scale(1)"
                        />
                    </svg>
                </span>
            </div>
        </div>
    );
};