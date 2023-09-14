// DONE
import HeaderTitle from "./HeaderTitle";
import Title from "./Title";

function About() {
    return (
        <div className="about pt-5 pb-5 wow  animate__fadeInUp" data-wow-duration="2s" id="about">
            <Title icon="fa-solid fa-user me-1" title="ABOUT" />
            <HeaderTitle title="A compelling story can elevate a good design to " span="greatness" />
            <p className="mt-4 mb-2">I am a student in the field of computer science and artificial intelligence, and
                have been learning about web design and development for the past two years. I have executed numerous
                designs and worked as a freelancer on various projects. I am passionate about programming and
                constantly strive to improve my skills and capabilities to compete effectively. I am confident that
                I will achieve my goals soon.</p>
            <p>I enjoy challenging myself to learn new techniques and apply them in my projects. I love working with
                a team and exchanging ideas and learning from others. I am always looking to improve the user
                experience and make designs more attractive and user-friendly. I am interested in artificial
                intelligence technologies and want to apply them in web design and development. I believe that
                innovation and creativity are the keys to success in web design.</p>
        </div>
    )
}

export default About;