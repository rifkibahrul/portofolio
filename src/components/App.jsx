import Navbar from "./navbar/Navbar.jsx";
import Hero from "./hero/Hero.jsx";

function App() {
    return (
        <>
            <Navbar />
            <main className="max-w-[1920px] mx-auto overflow-hidden">
                <Hero />
            </main>
        </>
    );
}

export default App;
