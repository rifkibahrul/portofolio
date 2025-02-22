const LeftContent = ({ name }) => {
    return (
        <div className="w-full self-center px-4 lg:w-1/2">
            {/* Text */}
            <h1 className="h1 font-semibold text-accent mb-8">
                Hello! 👋 I`am <span className="text-primary">{name}</span>
            </h1>

            <p className="leading-relaxed font-light mb-8">
                Recent Computer Science graduate, ready to launch my career in
                technology and apply what I have learned.
            </p>

            {/* Button */}
            <div className="flex items-center mx-auto space-x-4">
                <a
                target="_blank"
                href="https://docs.google.com/document/d/15MWp1XYO6DXZvBN4913XE5mBVPIsW9lJ/edit?usp=sharing&ouid=105102359880494734088&rtpof=true&sd=true"
                className="btn btn-accent font-semibold cursor-pointer shadow-lg"
                >
                Download CV
                </a>
            </div>
        </div>
    );
};

export default LeftContent