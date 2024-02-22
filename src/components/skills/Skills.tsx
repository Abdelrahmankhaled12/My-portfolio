import './style.scss'
import { skills } from '../../constants'
import HeaderTitle from "../headerTitleSection/HeaderTitle"
import ContentWrapper from '../contentWrapper/ContentWrapper'
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skills = () => {
    return (
        <section className="skills wow animate__fadeInUp" data-wow-duration="2s" id="skills">
            <ContentWrapper>
                <div className="title">
                    <FontAwesomeIcon icon={faWandMagicSparkles} /> SKILLS
                </div>
                <HeaderTitle title="My " span="Advantages" />
                <div className="boxes">
                    {
                        skills.map(skill => (
                            <div className="wow animate__fadeInUp" data-wow-duration="2s" key={skill.skill}>
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