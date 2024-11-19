import HeaderTitle from '../headerTitleSection/HeaderTitle'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import './style.scss'
import { faCode, faLaptopCode , faTableCells } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { projects } from '../../constants'

const Portfolio = () => {
    return (
        <section className="portfolio section" data-aos="fade-up"
        data-aos-delay="300" data-aos-duration="1000" id="portfolio">
            <ContentWrapper>
                <div className="title">
                <FontAwesomeIcon icon={faTableCells} /> PORTFOLIO
                </div>
                <HeaderTitle title="Featured " span="Projects" />
                <div className="boxes">
                    {
                        projects.map((item, index) => (
                            <div className="box"  data-aos="fade-up"
                            data-aos-delay="300" data-aos-duration="1000" key={index}>
                                <img src={item.img} alt="project img" />
                                <a className='titleNameProject' href={item.demo} target='_blank'>
                                    {item.name}
                                </a>
                                <p>{item.description}</p>
                                <div className="source">
                                    <a href={item.demo} target='_blank'>Live Demo <FontAwesomeIcon icon={faLaptopCode} /></a>
                                    <a href={item.gitHup} target='_blank'> Repo <FontAwesomeIcon icon={faCode} /></a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </ContentWrapper>
        </section>
    )
}

export default Portfolio