// DONE
import HeaderTitle from "./HeaderTitle";
import Title from "./Title";

function Resume() {
    return (
        <div className="resume pt-5 pb-5 wow animate__fadeInUp" data-wow-duration="2s" id="resume">
            <Title icon="fa-solid fa-briefcase me-1" title="RESUME" />
            <HeaderTitle title="Education & " span="Experience" />
            <ul className="ul-1 mt-4">
                <li className="li wow animate__fadeInLeft" data-wow-duration="2s">
                    <ul>
                        <li className="li-1">2022 - Present</li>
                        <li>Front End Developer</li>
                        <li className="mb-5">Web Designer</li>
                    </ul>
                </li>
                <li className="li wow animate__fadeInUp" data-wow-duration="2s">
                    <ul>
                        <li className="li-1">2021 - Present</li>
                        <li>Studying at the Faculty of Computer Science and Artificial Intelligence.</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Resume;