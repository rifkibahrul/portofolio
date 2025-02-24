import Navbar from "./navbar/Navbar.jsx";
import Hero from "./hero/Hero.jsx";
import About from "./about/About.jsx";
import Experience from "./experience/Experience.jsx";

function App() {
    return (
        <>
            <Navbar />
            <main className="max-w-[1920px] mx-auto overflow-hidden">
                <Hero />
                <About />
                <Experience />
                <Hero />
            </main>
        </>
    );
}

export default App;
