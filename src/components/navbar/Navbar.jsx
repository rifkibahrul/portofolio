import { useState, useEffect } from "react";
import { RiMenu4Fill, RiCloseLargeLine } from "@remixicon/react";
import { navItems } from "./component/navItems.js";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    /**
     * ! Note
     * * isOpen untuk menyimpan nilai state (false / true)
     * * setIsOpen adalah fungsi untuk mengubah nilai state
     */
    const [isOpen, setIsOpen] = useState(false); // Navbar toogle
    const [isFixed, setIsFixed] = useState(false); // Navbar fixed scroll
    const [isDesktop, setIsDesktop] = useState(window.matchMedia("(min-width: 1024px)").matches);

    useEffect(() => {
        // Menutup menu ketika dilayar besar
        const handleResize = () => {
            if (window.matchMedia("(min-width: 1024px)").matches) {
                setIsDesktop(true);
                setIsOpen(false);
            } else {
                setIsDesktop(false);
            }
        };

        // Navbar fixed saat scroll
        const handleNavbar = () => {
            setIsFixed(window.scrollY >= 80);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleNavbar);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleNavbar);
        };
    }, []);

    return (
        <header
            className={`top-0 w-full h-20 z-30 ${
                isFixed
                    ? "fixed z-[9999] bg-lighDark/80 backdrop-blur-sm shadow-md"
                    : "absolute"
            }`}
        >
            <div className="container mx-auto flex justify-between h-full items-center">
                {/* Komponen Logo */}
                <a href="#">Muhammad Rifki</a>

                {/* Komponen Navigasi Utama */}
                <nav>
                    {/* Komponen Toogle Navbar Mobile */}
                    <NavToogle isOpen={isOpen} setIsOpen={setIsOpen} />

                    {/* Komponen Menu Navigasi */}
                    <NavMenu isOpen={isOpen} isDesktop={isDesktop} />
                </nav>
            </div>
        </header>
    );
};

function NavMenu({ isOpen, isDesktop }) {
    return (
        <AnimatePresence>
            {(isOpen || isDesktop) && (
                <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={isDesktop ? { opacity: 1, height: "auto" } : { opacity: 1, height: "350px" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className={`fixed w-full overflow-hidden top-[80px] left-0 right-0 flex flex-col gap-7 transition ease-linear duration-300 ${
                        isOpen
                            ? "h-[350px] p-6 bg-lighDark/80 backdrop-blur-sm items-end"
                            : "h-0 p-0 border-none"
                    } lg:relative lg:flex-row lg:p-0 lg:top-0 lg:h-full`}
                    id="nav-menu"
                >
                    {navItems.map((item, index) => (
                        <motion.li
                            initial={ isDesktop ? { y:-20, opacity: 0 } : {x: -100, opacity: 0}}
                            animate={isDesktop ? { y:0, opacity: 1 } : {x: 0, opacity: 1}}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            key={index}
                        >
                            <a href={item.link}>{item.name}</a>
                        </motion.li>
                    ))}
                </motion.ul>
            )}
        </AnimatePresence>
    );
}

function NavToogle({ isOpen, setIsOpen }) {
    return (
        <div
            className="cursor-pointer lg:hidden"
            id="nav-mobile"
            onClick={() => setIsOpen(!isOpen)} // isOpen default = False, maka !isOpen = true (navbar terbuka)
        >
            {!isOpen ? (
                <RiMenu4Fill className="nav-icon" />
            ) : (
                <RiCloseLargeLine />
            )}
        </div>
    );
}

export default Navbar;
