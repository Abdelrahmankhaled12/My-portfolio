import image from "../images/me/photo_2023-04-01_20-50-54.jpg"
import iconUpwork from '../images/upwork.png'

function PersonalData() {
    return (
        <>
            <div className="personal-data wow animate__fadeInLeft" data-wow-duration="1.5s">
                <div className="container p-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h6>Abdelrahman</h6>
                        <h6>Front End Developer</h6>
                    </div>
                    <div className="image text-center">
                        <img src={image} alt="" />
                    </div>
                    <h4 className="text-center pt-3 pb-3">Abdelrahman Khaled
                        Base in Cairo, Egypt</h4>
                    <div className="icons d-flex justify-content-center align-items-center mb-3">
                        <div className="icon">
                            <a href="https://github.com/Abdelrahmankhaled12"><i className="fa-brands fa-github" /></a>
                        </div>
                        <div className="icon">
                            <a href="https://www.linkedin.com/in/abdelrahman-khaled12/"><i className="fa-brands fa-linkedin" /></a>
                        </div>
                    </div>
                    <div className="button">
                        <a href="#contact" className="buttonStyle"><i className="fa-regular fa-envelope" /> HIRE ME!</a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default PersonalData;