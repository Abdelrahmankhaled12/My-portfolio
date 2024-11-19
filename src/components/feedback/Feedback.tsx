import ContentWrapper from '../contentWrapper/ContentWrapper'
import HeaderTitle from '../headerTitleSection/HeaderTitle'
import { faComments, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.scss'
import { useState } from 'react';
import { feedbacks } from '../../constants'

const Feedback = () => {

    const [slide_active, setSlide_active] = useState(0)

    const handleButtonClick = (action: string) => {
        if (action === "right") {
            if (slide_active === (feedbacks.length - 1)) {
                setSlide_active(0)
            } else {
                setSlide_active(slide_active + 1)
            }
        }

        if (action === "left") {
            if (slide_active === 0) {
                setSlide_active(feedbacks.length - 1)
            } else {
                setSlide_active(slide_active - 1)
            }
        }
    }


    return (
        <section className="feedback" data-aos="fade-up"
        data-aos-delay="300" data-aos-duration="1000" id="feedback">
            <ContentWrapper>
                <div className="title">
                    <FontAwesomeIcon icon={faComments} /> Feedbacks
                </div>
                <HeaderTitle title="Clients  " span="Feedbacks" />
                <div className="boxes">
                    {
                        feedbacks.map((feed, index) => (
                            <img src={feed} alt='' key={index} className={slide_active === index ? 'hide active' : "hide"} />
                        ))
                    }
                </div>
                <div className="buttons">
                    <button onClick={() => handleButtonClick("left")}><FontAwesomeIcon icon={faChevronLeft} /></button>
                    <button onClick={() => handleButtonClick("right")}><FontAwesomeIcon icon={faChevronRight} /></button>
                </div>
            </ContentWrapper>
        </section>
    )
}

export default Feedback

