// DONE
import image from "../images/round.png"
import Title from "./Title";

function Home() {
    return (
        <>
            <div className="home pb-5 pt-5 wow animate__fadeInUp" id="home" data-wow-duration="2s">
                <Title icon="fa-solid fa-house me-1" title="INTRODUCE" />
                <h1>Welcome to my website! I'm <span>Abdelrahman Khaled</span>, a Front End Engineer passionate about
                    designing and
                    developing amazing user experiences. We hope you enjoy browsing my site.</h1>
                <p className="mt-5">I design and code beautifully simple things and i love what i do. Just simple like that!
                </p>
                <div className="icon">
                    <a href="#portfolio">
                        <img src={image} alt="" />
                        <i className="fa-solid fa-arrow-down-long" /></a>
                </div>
                <div className="flex d-flex text-center">
                    <div className="box me-5">
                        <h1>2+</h1>
                        <p>years of <br /> experience</p>
                    </div>
                    <div className="box">
                        <h1>20+</h1>
                        <p>Projects completed</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home;