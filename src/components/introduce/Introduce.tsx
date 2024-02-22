import round from "../../assets/round.png"
import ContentWrapper from "../contentWrapper/ContentWrapper"
import './style.scss'
import { faHouse, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Introduce = () => {
    
    const handleButtonClick = () => {
        const section = document.getElementById("portfolio");
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <section className="home wow animate__fadeInUp" id="home" data-wow-duration="2s">
                <ContentWrapper>
                    <div className="title">
                    <FontAwesomeIcon icon={faHouse} /> INTRODUCE
                    </div>
                    <h1>Welcome to my website! I'm <span>Abdelrahman Khaled</span>, a Front End Engineer passionate about
                        designing and
                        developing amazing user experiences. We hope you enjoy browsing my site.</h1>
                    <p>I design and code beautifully simple things and i love what i do. Just simple like that!
                    </p>
                    <div className="icon" onClick={()=>handleButtonClick()}>
                        <div>
                            <img src={round} alt="round" />
                            <FontAwesomeIcon icon={faArrowDown} />
                        </div>
                    </div>
                    <div className="boxes">
                        <div className="box">
                            <h1>2+</h1>
                            <p>years of <br /> experience</p>
                        </div>
                        <div className="box">
                            <h1>20+</h1>
                            <p>Projects completed</p>
                        </div>
                    </div>
                </ContentWrapper>
            </section>
        </>
    )
}

export default Introduce