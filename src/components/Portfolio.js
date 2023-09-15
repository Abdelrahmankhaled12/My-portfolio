import HeaderTitle from "./HeaderTitle";
import Title from "./Title";
import movix from "../images/projects/movix.png"
import imageProject1 from "../images/projects/project-1.png"
import imageProject2 from "../images/projects/project-2.png"
import imageProject3 from "../images/projects/project-3.png"
import imageProject4 from "../images/projects/project-4.png"
import html from "../images/icons/html.png"
import css from "../images/icons/css.png"
import js from "../images/icons/js.png"
import wow from "../images/icons/wow-logo.png"
import sweet from "../images/icons/swal2-logo.png"
import owl from "../images/icons/owl.png"
import bootstrap from "../images/icons/bootstrap.png"
import emailjs from "../images/icons/emailjs.png"
import redux from "../images/icons/redux.png"
import react from "../images/icons/react.png"
import sass from "../images/icons/sass.png"






function Portfolio() {
    return (
        <div className="portfolio pt-5 pb-5 wow animate__fadeInUp" data-wow-duration="2s" id="portfolio">
            <Title title="PORTFOLIO" icon="fa-solid fa-table-cells me-1" />
            <HeaderTitle title="Featured " span="Projects" />
            <div className="boxes">
            <div className="box wow animate__fadeInUp  mt-5" data-wow-duration="2s">
                    <img className="imageProject" src={movix} alt="" />
                    <div className="tools d-flex ms-2 flex-wrap">
                        <img className="me-2 mt-2" src={react} alt="" />
                        <img className="me-2 mt-2" src={sass} alt="" />
                        <img className="me-2 mt-2" src={redux} alt="" />
                        <img className="me-2 mt-2" src={js} alt="" />
                    </div>
                    <div className="flex d-flex justify-content-between align-items-center mt-2 ms-3 me-3 ">
                        <a href="https://movix-ui.netlify.app/">
                            <h4>Movix</h4>
                        </a>
                        <div className="source d-flex">
                            <a href="https://movix-ui.netlify.app/" className="me-2">Live Demo <i className="fa-solid fa-laptop-code ms-1" /></a>
                            <a href="https://github.com/Abdelrahmankhaled12/Movix"> Repo <i className="fa-solid fa-code ms-1" /></a>
                        </div>
                    </div>
                </div>


                <div className="box wow animate__fadeInUp  mt-5" data-wow-duration="2s">
                    <img className="imageProject" src={imageProject1} alt="" />
                    <div className="tools d-flex ms-2 flex-wrap">
                        <img className="me-2 mt-2" src={html} alt="" />
                        <img className="me-2 mt-2" src={css} alt="" />
                        <img className="me-2 mt-2" src={js} alt="" />
                        <img className="me-2 mt-2" src={bootstrap} alt="" />
                        <img className="me-2 mt-2" src={emailjs} alt="" />
                        <img className="me-2 mt-2" src={wow} alt="" />
                        <img className="me-2 mt-2" src={sweet} alt="" />
                    </div>
                    <div className="flex d-flex justify-content-between align-items-center mt-2 ms-3 me-3 ">
                        <a href="https://abdelrahmankhaled12.github.io/Accounting-office/">
                            <h4>Accounting office</h4>
                        </a>
                        <div className="source d-flex">
                            <a href="https://abdelrahmankhaled12.github.io/Accounting-office/" className="me-2">Live Demo <i className="fa-solid fa-laptop-code ms-1" /></a>
                            <a href="https://github.com/Abdelrahmankhaled12/Accounting-office"> Repo <i className="fa-solid fa-code ms-1" /></a>
                        </div>
                    </div>
                </div>
                <div className="box wow animate__fadeInUp  mt-5" data-wow-duration="2s">
                    <img className="imageProject" src={imageProject2} alt="" />
                    <div className="tools d-flex ms-2 flex-wrap">
                        <img className="me-2 mt-2" src={html} alt="" />
                        <img className="me-2 mt-2" src={css} alt="" />
                        <img className="me-2 mt-2" src={js} alt="" />
                        <img className="me-2 mt-2" src={bootstrap} alt="" />
                        <img className="me-2 mt-2" src={emailjs} alt="" />
                        <img className="me-2 mt-2" src={wow} alt="" />
                        <img className="me-2 mt-2" src={sweet} alt="" />
                    </div>
                    <div className="flex d-flex justify-content-between align-items-center mt-2 ms-3 me-3">
                        <a href="https://abdelrahmankhaled12.github.io/Sleep-Station/">
                            <h4>Sleep Station - E-Commerce</h4>
                        </a>
                        <div className="source d-flex">
                            <a href="https://abdelrahmankhaled12.github.io/Sleep-Station/" className="me-2">Live Demo <i className="fa-solid fa-laptop-code ms-1" /></a>
                            <a href="https://github.com/Abdelrahmankhaled12/Sleep-Station"> Repo <i className="fa-solid fa-code ms-1" /></a>
                        </div>
                    </div>
                </div>
                <div className="box wow animate__fadeInUp  mt-5" data-wow-duration="2s">
                    <img className="imageProject" src={imageProject4} alt="" />
                    <div className="tools d-flex ms-2 flex-wrap">
                        <img className="me-2 mt-2" src={html} alt="" />
                        <img className="me-2 mt-2" src={css} alt="" />
                        <img className="me-2 mt-2" src={js} alt="" />
                        <img className="me-2 mt-2" src={bootstrap} alt="" />
                        <img className="me-2 mt-2" src={wow} alt="" />
                        <img className="me-2 mt-2" src={owl} alt="" />
                    </div>
                    <div className="flex d-flex justify-content-between align-items-center mt-2 ms-3 me-3">
                        <a href="https://abdelrahmankhaled12.github.io/APEX/">
                            <h4>APEX</h4>
                        </a>
                        <div className="source d-flex">
                            <a href="https://abdelrahmankhaled12.github.io/APEX/" className="me-2">Live Demo <i className="fa-solid fa-laptop-code ms-1" /></a>
                            <a href="https://github.com/Abdelrahmankhaled12/APEX"> Repo <i className="fa-solid fa-code ms-1" /></a>
                        </div>
                    </div>
                </div>
                <div className="box wow animate__fadeInUp  mt-5" data-wow-duration="2s">
                    <img className="imageProject" src={imageProject3} alt="" />
                    <div className="tools d-flex ms-2 flex-wrap">
                        <img className="me-2 mt-2" src={html} alt="" />
                        <img className="me-2 mt-2" src={css} alt="" />
                        <img className="me-2 mt-2" src={js} alt="" />
                        <img className="me-2 mt-2" src={bootstrap} alt="" />
                        <img className="me-2 mt-2" src={wow} alt="" />
                    </div>
                    <div className="flex d-flex justify-content-between align-items-center mt-2 ms-3 me-3">
                        <a href="https://abdelrahmankhaled12.github.io/CryptoCoin-template/">
                            <h4>CryptoCoin</h4>
                        </a>
                        <div className="source d-flex">
                            <a href="https://abdelrahmankhaled12.github.io/CryptoCoin-template/" className="me-2">Live Demo <i className="fa-solid fa-laptop-code ms-1" /></a>
                            <a href="https://github.com/Abdelrahmankhaled12/CryptoCoin-template"> Repo <i className="fa-solid fa-code ms-1" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;