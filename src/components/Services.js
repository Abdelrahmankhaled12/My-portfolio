import BoxServices from "./BoxServices";
import HeaderTitle from "./HeaderTitle";
import Title from "./Title";

function Services() {
    return (
        <div className="services pt-5 pb-5 wow animate__fadeInUp" data-wow-duration="2s" id="services">
            <Title icon="fa-solid fa-server me-1" title="SERVICES" />

            <HeaderTitle title="My " span="Specializations" />

            <BoxServices title="Website Design" description="Convert PSD, XD, Figma Designs to websites." />

            <BoxServices title="Mobile Friendly" description="My website development skills include HTML, CSS, JavaScript, and other web technologies, which
                    enable me to create responsive and dynamic websites that work seamlessly across all devices." />

            <BoxServices title="Website performance improvement" description="Through my expertise in website development, I can identify and address performance issues on
                    your website, ensuring that it loads quickly, performs well, and provides a smooth user
                    experience." />
                    
            <BoxServices title="Landing Pages" description="Create landing for your business and Products." />
            <BoxServices title="Portfolio Design" description="Creating a personal website makes you and your customers more confident." />

        </div>
    )
}


export default Services;