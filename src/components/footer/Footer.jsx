import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
function footer() {
  return (
    
    <footer>
      <a href="#" className='footer__logo'>MSM</a>
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
        <a href="https://www.instagram.com/crispybolt/"><FaInstagram/></a>
        <a href="https://facebook.com"> <BsFacebook/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Muhammed seyhmusa.All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer