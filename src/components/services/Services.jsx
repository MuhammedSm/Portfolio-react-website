import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'
function services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className="service__head">
            <h3>Frontend</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Developing and maintaining the user interface.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Fixing bugs and testing for usability.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Using ReactJs, NextJS, HTML, JavaScript ,Tailwind and CSS to bring concepts to life.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Using APIs and RESTful Services</p>
            </li>
          
            
            
          </ul>
        </article>
        {/* Backend */}

        <article className='service'>
          <div className="service__head">
            <h3>Backend</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Database Administration.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p> APIs & Integrations.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Server Administration.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Security Administration .</p>
            </li>
          
            
            
          </ul>
        </article>
        {/* end of Web development  */}
        
      </div>
    </section>
  )
}

export default services