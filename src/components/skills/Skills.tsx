import './style.scss'
import { skills } from '../../constants'
import HeaderTitle from "../headerTitleSection/HeaderTitle"
import ContentWrapper from '../contentWrapper/ContentWrapper'
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skills = () => {
    return (
        <section className="skills" data-aos="fade-up"
            data-aos-delay="300" data-aos-duration="1000" id="skills">
            <ContentWrapper>
                <div className="title" >
                    <FontAwesomeIcon icon={faWandMagicSparkles} /> SKILLS
                </div>
                <HeaderTitle title="My " span="Advantages" />
                <div className="boxes">
                    {
                        skills.map((skill, index) => (
                            <div className="wow" data-aos="fade-up"
                                data-aos-delay={((index + 1) % 4) * 300} data-aos-duration="1000" key={skill.skill}>
                                <div className="box text-center">
                                    <div className="img">
                                        <img src={skill.image} alt="" />
                                    </div>
                                    <p>{skill.skill}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </ContentWrapper>
        </section>
    )
}

export default Skills