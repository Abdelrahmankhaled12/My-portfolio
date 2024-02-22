import './style.scss'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Menu from './Menu'
import { useState } from 'react'
const ButtonMenu = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button className="btnMenu" onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon icon={faBarsStaggered} />
      </button>
      <Menu isOpen={isOpen} setClose={() => setIsOpen(false)} />
    </>

  )
}

export default ButtonMenu