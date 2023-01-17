import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
function header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mohammad Cheikh Moussa</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default header