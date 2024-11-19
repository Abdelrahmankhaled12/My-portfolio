import About from "./components/about/About"
import BackgroundVideo from "./components/background/BackgroundVideo"
import BoxInfo from "./components/boxInfo/BoxInfo"
import Introduce from "./components/introduce/Introduce"
import Portfolio from "./components/portfolio/Portfolio"
import Services from "./components/services/Services"
import Contact from "./components/contact/Contact"
import Skills from "./components/skills/Skills"
import ButtonMenu from "./components/menu/ButtonMenu"
import MenuSections from "./components/menuSections/MenuSections"
import Feedback from "./components/feedback/Feedback"
import Resume from "./components/resume/Resume"
import Animation from "./components/animation/Animation"
import { useEffect, useState } from "react"
import 'aos/dist/aos.css';
import Intro from "./components/intro/Intro"
import Aos from 'aos'
import Effect from "./components/effect/Effect"

function App() {

  const [animationOff, setAnimationOff] = useState(true);
  const [introOff, seIntroOff] = useState(true);


  useEffect(() => {
    animationOFF()
  }, [])


  const animationOFF = () => {
    setTimeout(() => {
      setAnimationOff(false)
      setTimeout(() => {
        seIntroOff(false)
        Aos.init({
          once: true,
        });
      }, 3000)
    }, 3000)
  }


  return (
    <>
      {
        animationOff ? (
          <Animation />
        ) : (
          introOff ? (
            <Intro />
          ) : (
            <Effect>
              <BackgroundVideo />
              <BoxInfo />
              <Introduce />
              <About />
              <Resume />
              <Services />
              <Skills />
              <Portfolio />
              <Feedback />
              <Contact />
              <ButtonMenu />
              <MenuSections />
            </Effect>
          )
        )
      }
    </>
  )
}

export default App
