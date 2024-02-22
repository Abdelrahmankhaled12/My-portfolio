import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faUser,
    faEnvelope,
    faTableCells,
    faServer,
    faWandMagicSparkles,
    faComments,
    faXmark,
    faBriefcase
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faUpwork } from '@fortawesome/free-brands-svg-icons';

interface MenuProps {
    isOpen: boolean;
    setClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, setClose }) => {

    const handleButtonClick = (value: string) => {
        const section = document.getElementById(value);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setClose()
        }
    };

    return (
        <>
            <div className={isOpen ? "menuButton" : "menuButton hide"}>
                <div style={{ "flex": "1" }} onClick={() => setClose()}></div>
                <div className="container">
                    <div className="headerMenu">
                        <h2>Menu</h2>
                        <button onClick={() => setClose()}>
                        <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                    <div className="bodyMenu">
                        <div>
                            <ul>
                                <li onClick={() => handleButtonClick("home")}>
                                    <FontAwesomeIcon icon={faHouse} />
                                    Home
                                </li>
                                <li onClick={() => handleButtonClick("about")}>
                                    <FontAwesomeIcon icon={faUser} />
                                    About
                                </li>
                                <li onClick={() => handleButtonClick("resume")}>
                                    <FontAwesomeIcon icon={faBriefcase} />
                                    Resume
                                </li>
                                <li onClick={() => handleButtonClick("services")}>
                                    <FontAwesomeIcon icon={faServer} />
                                    Services
                                </li>
                                <li onClick={() => handleButtonClick("skills")}>
                                    <FontAwesomeIcon icon={faWandMagicSparkles} />
                                    Skills
                                </li>
                                <li onClick={() => handleButtonClick("portfolio")}>
                                    <FontAwesomeIcon icon={faTableCells} />
                                    Portfolio
                                </li>
                                <li onClick={() => handleButtonClick("feedback")}>
                                    <FontAwesomeIcon icon={faComments} />
                                    Feedback
                                </li>
                                <li onClick={() => handleButtonClick("contact")}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    Contact
                                </li>
                            </ul>
                            <div className="footer">
                                <p>Social</p>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;
