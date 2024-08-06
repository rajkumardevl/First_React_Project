import "./App.css";
import HeroSection from "./components/hero";
import Navigation from "./components/nav";
const app = () => {
    return (
        <>
            <div>
                <Navigation />
                <HeroSection />
            </div>
            
        </>
    )
}

export default app;