import image from '../../assets/me.jpg'
import './style.scss'
import { faGithub, faLinkedin, faUpwork } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import myCV from '../../assets/cv/Abdelrahman-Khaled.pdf'

const BoxInfo = () => {

    const handleButtonClick = () => {
        const section = document.getElementById("contact");
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="boxInfo" data-aos="fade-right"
        data-aos-delay="400" data-aos-duration="1500">
            <div className="content">
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="text">
                    <h4>Abdelrahman Khaled</h4>
                    <span>Base in Cairo, Egypt</span>
                </div>
                <div className="icons">
                    <a className="icon" target='_blank' href="https://github.com/Abdelrahmankhaled12">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a className="icon" target='_blank' href="https://www.upwork.com/freelancers/~01b4ff0c8a80509900">
                        <FontAwesomeIcon icon={faUpwork} />
                    </a>
                    <a className="icon" target='_blank' href="https://www.linkedin.com/in/abdelrahman-khaled12/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <button className="icon"  onClick={() => window.open(myCV)}>
                        <span>CV</span>
                    </button>
                </div>
                <button
                    className="buttonStyle"
                    onClick={()=>handleButtonClick()}
                >
                    <FontAwesomeIcon icon={faEnvelope} /> HIRE ME!
                </button>
            </div>
        </div>
    )
}

export default BoxInfo