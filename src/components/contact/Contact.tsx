import ContentWrapper from '../contentWrapper/ContentWrapper'
import './style.scss'
import HeaderTitle from '../headerTitleSection/HeaderTitle'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
    return (
        <section className="contact wow animate__fadeInUp" data-wow-duration="2s" id="contact">
            <ContentWrapper>
                <div className="title">
                <FontAwesomeIcon icon={faEnvelope} /> CONTACT
                </div>
                <HeaderTitle title="Let's Work " span="Together!" />
                <form action="" className="mt-4">
                    <div className="grid">
                        <input
                            type="text"
                            placeholder="Your Full Name"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            required
                        />
                    </div>
                    <input type="text"
                        placeholder="Your Number Phone"
                        required
                    />
                    <textarea
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                        rows={10}
                        defaultValue={""}
                    />
                    <button type="submit" className="buttonStyle mt-4">Send Message</button>
                </form>
            </ContentWrapper>
        </section>
    )
}

export default Contact