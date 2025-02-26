import Navbar from "./navbar/Navbar.jsx";
import Hero from "./hero/Hero.jsx";
import About from "./about/About.jsx";
import Experience from "./experience/Experience.jsx";
import Skills from "./skill/Skills.jsx";
import Projects from "./project/Projects.jsx";
import { Footer } from "./footer/Footer.jsx";

function App() {
    return (
        <>
            <Navbar />
            <main className="max-w-[1920px] mx-auto overflow-hidden">
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Footer />
            </main>
        </>
    );
}

export default App;
