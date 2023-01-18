import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'
const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'> 
        <div className='about__me-image'>
          <img src={ME} alt="About Image" />
          </div>
        </div>
      

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>2+ years</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Group Projects</h5>
            <small>3</small>
          </article>
          <article className='about__card'>
            <BsFolderCheck className='about__icon'/>
            <h5>Projects</h5>
            <small>5+ Completed</small>
          </article>
        </div>
        <p>
         I am a passionate person, I love learning new things, self learner, hardworking individual, with broad skills and experience in Web and software development
        </p>
        <a href="#contact" class="btn btn-primary">Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default about