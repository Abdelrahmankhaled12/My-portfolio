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
import 'animate.css/animate.css';

function App() {

  const [animationOff, setAnimationOff] = useState(true);


  useEffect(() => {
    animationOFF()
  }, [])

  const animationOFF = () => {
    setTimeout(() => {
      setAnimationOff(false)
    }, 3600)
  }


  return (
    <>
      {
        animationOff ? (
          <Animation />
        ) : (
          <>
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
          </>
        )
      }
    </>
  )
}

export default App
