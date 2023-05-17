import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Services from "./Services";
import Skills from "./Skills";
import Contact from "./Contact";
import Portfolio from "./Portfolio";



function Body() {
    return (
        <div className="body pt-5">
            <div className="container mx-auto px-4">
                <Home />
                <About />
                <Resume />
                <Services />
                <Skills />
                <Portfolio />
                <Contact />
            </div>
        </div>
    )
}

export default Body;