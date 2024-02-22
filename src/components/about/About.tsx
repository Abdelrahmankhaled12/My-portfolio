import ContentWrapper from '../contentWrapper/ContentWrapper'
import HeaderTitle from '../headerTitleSection/HeaderTitle'
import './style.scss'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
    return (
        <section className="about wow animate__fadeInUp" data-wow-duration="2s" id="about">
            <ContentWrapper>
                <div className="title">
                    <FontAwesomeIcon icon={faUser} /> ABOUT
                </div>
                <HeaderTitle title="A compelling story can elevate a good design to " span="greatness" />
                <p className="mt-4 mb-2">I am a student in the field of computer science and artificial intelligence, and
                    have been learning about web design and development for the past two years. I have executed numerous
                    designs and worked as a freelancer on various projects. I am passionate about programming and
                    constantly strive to improve my skills and capabilities to compete effectively. I am confident that
                    I will achieve my goals soon.</p>
                <br />
                <p>I enjoy challenging myself to learn new techniques and apply them in my projects. I love working with
                    a team and exchanging ideas and learning from others. I am always looking to improve the user
                    experience and make designs more attractive and user-friendly. I am interested in artificial
                    intelligence technologies and want to apply them in web design and development. I believe that
                    innovation and creativity are the keys to success in web design.</p>
            </ContentWrapper>
        </section>
    )
}

export default About