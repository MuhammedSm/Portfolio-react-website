import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/muhammed-%C5%9Feyhmusa-001968211/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/MuhammedSm" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.instagram.com/crispybolt/" target="_blank" rel="noreferrer"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials