import React from 'react'
import './contact.css' 
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_52eeq9g', 'template_30a5q6z', form.current, 'b2j8XAM2Ircg-WGPo')
      e.target.reset()
    };
    return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className='container contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
              <MdOutlineMailOutline className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>muhammedseyhmusa5@gmail.com</h5>
              <a href="mailto:muhammedseyhmusa5@gmail.com">Send a message</a>
            </article>
            
            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+96176606658</h5>
              <a href="https://wa.me/+96176606658">Send a message</a>
            </article>

          </div>
          {/*End of contact option*/}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder="Email Address" required/>
            <textarea name="message"  rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>

    )
}

export default Contact