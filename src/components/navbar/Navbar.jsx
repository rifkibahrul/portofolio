import { useState, useEffect } from "react";
import { RiMenu4Fill } from "@remixicon/react";

function Navbar() {
    /**
     * ! Note
     * * isOpen untuk menyimpan nilai state (false / true)
     * * setIsOpen adalah fungsi untuk mengubah nilai state
     */
    const [isOpen, setIsOpen] = useState(false);

    // Menutup menu ketika dilayar besar
    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia("(min-width: 1024px)").matches) {
                setIsOpen(false);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });

    return (
        <header className="sticky top-0 w-full h-20 bg-transparent z-30">
            <div className="container mx-auto flex justify-between h-full items-center">
                {/* Komponen Logo */}
                <a href="#">Muhammad Rifki</a>

                {/* Komponen Navigasi Utama */}
                <nav>
                    {/* Komponen Toogle Navbar Mobile */}
                    <NavToogle isOpen={isOpen} setIsOpen={setIsOpen} />

                    {/* Komponen Menu Navigasi */}
                    <NavMenu isOpen={isOpen} />
                </nav>
            </div>
        </header>
    );
}

function NavMenu({ isOpen }) {
    return (
        <ul
            className={`
                fixed w-full overflow-hidden top-[80px] left-0 right-0 flex flex-col gap-7 transition-all duration-300
                ${isOpen ? "h-[350px] p-6 bg-lighDark" : "h-0 p-0 border-none"}
                lg:relative lg:flex-row lg:p-0 lg:top-0 lg:h-full
            `}
            id="nav-menu"
        >
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Experience & Education</a>
            </li>
            <li>
                <a href="#">Skills</a>
            </li>
            <li>
                <a href="#">Project</a>
            </li>
        </ul>
    );
}

function NavToogle({ isOpen, setIsOpen }) {
    return (
        <div
            className="cursor-pointer lg:hidden"
            id="nav-mobile"
            onClick={() => setIsOpen(!isOpen)} // isOpen default = False, maka !isOpen = true (navbar terbuka)
        >
            <RiMenu4Fill className="nav-icon" />
        </div>
    );
}

export default Navbar;
