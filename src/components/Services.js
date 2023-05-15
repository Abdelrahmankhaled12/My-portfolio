import BoxServices from "./BoxServices";
import HeaderTitle from "./HeaderTitle";
import Title from "./Title";

function Services() {
    return (
        <div className="services pt-5 pb-5 wow animate__fadeInUp" data-wow-duration="2s" id="services">
            <Title icon="fa-solid fa-server me-1" title="SERVICES" />

            <HeaderTitle title="My " span="Specializations" />

            <BoxServices title="Website performance improvement" description="Thanks to my website development skills, I am capable of creating professional websites,
                    customizing them to meet clients' needs, and optimizing them to achieve their online objectives." />

            <BoxServices title="Create websites" description="My website development skills include HTML, CSS, JavaScript, and other web technologies, which
                    enable me to create responsive and dynamic websites that work seamlessly across all devices." />

            <BoxServices title="Website performance improvement" description="Through my expertise in website development, I can identify and address performance issues on
                    your website, ensuring that it loads quickly, performs well, and provides a smooth user
                    experience." />
        </div>
    )
}


export default Services;