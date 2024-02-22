import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.scss'



interface BoxServicesProps {
    title: string;
    description: string;
}


const BoxServices: React.FC<BoxServicesProps> = ({ title, description }) => {
    return (
        <div className="boxService animate__fadeInUp" data-wow-duration="2s">
            <div className="head">
                <h4>{title}</h4>
                <FontAwesomeIcon icon={faCode} />
            </div>
            <p>{description}</p>
        </div>
    )
}


export default BoxServices;