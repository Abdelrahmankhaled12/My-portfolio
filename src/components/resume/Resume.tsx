import './style.scss'
import HeaderTitle from '../headerTitleSection/HeaderTitle'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Resume = () => {
    return (
        <section className="resume wow animate__fadeInUp" data-wow-duration="2s" id="resume">
            <ContentWrapper>
                <div className="title">
                    <FontAwesomeIcon icon={faBriefcase} /> RESUME
                </div>
                <HeaderTitle title="Education & " span="Experience" />
                <ul>
                    <li className="li wow animate__fadeInLeft" data-wow-duration="2s">
                        <ul>
                            <li className="li-1">2023 - Present</li>
                            <li className="mb-5">I work as a freelancer on the Upwork platform</li>
                        </ul>
                    </li>
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
            </ContentWrapper>
        </section>
    )
}

export default Resume