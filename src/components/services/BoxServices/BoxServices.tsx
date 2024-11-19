import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.scss'



interface BoxServicesProps {
    title: string;
    description: string;
}


const BoxServices: React.FC<BoxServicesProps> = ({ title, description }) => {
    return (
        <div className="boxService" data-aos="fade-up"
        data-aos-delay="300" data-aos-duration="1000">
            <div className="head">
                <h4>{title}</h4>
                <FontAwesomeIcon icon={faCode} />
            </div>
            <p>{description}</p>
        </div>
    )
}


export default BoxServices;