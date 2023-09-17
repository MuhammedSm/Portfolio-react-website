import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/muhammed-cheikh-moussa-001968211/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/MuhammedSm" target="_blank" rel="noreferrer"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials