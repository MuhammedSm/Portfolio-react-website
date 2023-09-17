import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'
function footer() {
  return (
    
    <footer>
      <a href="#" className='footer__logo'>MCM</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#expeirience">Expeirience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#Conacts">Conacts</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/muhammed-cheikh-moussa-001968211/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/MuhammedSm" target="_blank" rel="noreferrer"><FaGithub/></a>
        
      </div>
      <div className="footer__copyright">
        <small>&copy;Muhammed Cheikh Moussa.All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer