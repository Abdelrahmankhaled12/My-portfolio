import HeaderTitle from "../headerTitleSection/HeaderTitle"
import ContentWrapper from "../contentWrapper/ContentWrapper"
import BoxServices from "./BoxServices/BoxServices"
import { services } from "../../constants"
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Services = () => {
    return (
        <section className="services wow animate__fadeInUp" data-wow-duration="2s" id="services">
            <ContentWrapper>
                <div className="title">
                <FontAwesomeIcon icon={faServer} /> SERVICES
                </div>
                <HeaderTitle title="My " span="Specializations" />
                {
                    services.map((item, index) => (
                        <BoxServices
                            title={item.title}
                            description={item.description}
                            key={index}
                        />
                    ))
                }
            </ContentWrapper>
        </section>
    )
}

export default Services