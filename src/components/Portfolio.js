import HeaderTitle from "./HeaderTitle";
import Title from "./Title";
import imageProject1 from "../images/projects/project-1.png"
import html from "../images/icons/html.png"
import css from "../images/icons/css.png"
import js from "../images/icons/js.png"
import wow from "../images/icons/wow-logo.png"
import sweet from "../images/icons/swal2-logo.png"
import bootstrap from "../images/icons/bootstrap.png"
import emailjs from "../images/icons/emailjs.png"








function Portfolio() {
    return (
        <div className="portfolio pt-5 pb-5 wow animate__fadeInUp" data-wow-duration="2s" id="portfolio">
            <Title title="PORTFOLIO" icon="fa-solid fa-table-cells me-1" />
            <HeaderTitle title="Featured " span="Projects" />
            <div className="boxes">
                <div className="box wow animate__fadeInUp  mt-5" data-wow-duration="2s">
                    <img className="imageProject" src={imageProject1} alt="" />
                    <div className="tools d-flex ms-2">
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={js} alt="" />
                        <img src={bootstrap} alt="" />
                        <img className="me-2" src={emailjs} alt="" />
                        <img className="me-2" src={wow} alt="" />
                        <img src={sweet} alt="" />


                    </div>
                    <div className="flex d-flex justify-content-between align-items-center mt-2 ms-3 me-3">
                        <a href="https://abdelrahmankhaled12.github.io/Sleep-Station/">
                            <h4>Accounting office</h4>
                        </a>
                        <div className="source d-flex">
                            <a href="https://abdelrahmankhaled12.github.io/Accounting-office/" className="me-2">Live Demo <i className="fa-solid fa-laptop-code ms-1" /></a>
                            <a href="https://github.com/Abdelrahmankhaled12/Accounting-office"> Repo <i className="fa-solid fa-code ms-1" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;