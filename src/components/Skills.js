import BoxSkills from "./BoxSkills";
import image1 from "../images/skills/icons8-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-96.png"
import image2 from "../images/skills/icons8-css3-96.png"
import image3 from "../images/skills//icons8-javascript-96.png"
import image4 from "../images/skills/icons8-react-96.png"
import image5 from "../images/skills/icons8-tailwindcss-96.png"
import image6 from "../images/skills/icons8-bootstrap-96.png"
import image7 from "../images/skills/mui.png"
import image8 from "../images/skills/icons8-redux-96.png"
import image9 from "../images/skills/icons8-typescript-96.png"

import HeaderTitle from "./HeaderTitle";
import Title from "./Title";


function Skills() {
    return (
        <div className="skills pt-5 pb-5 wow animate__fadeInUp" data-wow-duration="2s" id="skills">
            <Title title="Skills" icon="fa-solid fa-wand-magic-sparkles me-1" />
            <HeaderTitle title="My " span="Advantages" />
            <div className="row mt-4">
                <BoxSkills skill="Html" image={image1} />
                <BoxSkills skill="CSS" image={image2} />
                <BoxSkills skill="JS" image={image3} />
                <BoxSkills skill="React" image={image4} />
                <BoxSkills skill="Tailwind" image={image5} />
                <BoxSkills skill="Bootstrap" image={image6} />
                <BoxSkills skill="Material Ui" image={image7} />
                <BoxSkills skill="Redux" image={image8} />
                <BoxSkills skill="Typescript" image={image9} />

            </div>
        </div>

    )
}

export default Skills;