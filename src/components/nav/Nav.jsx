import React, { useState, useEffect } from 'react';
import './nav.css';
import { BiHome } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { BsBookHalf } from 'react-icons/bs';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageDetail } from 'react-icons/bi';

function Nav() {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    // Function to handle scroll events and update the activeNav state
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Define the sections and their corresponding navigation links
      const sections = {
        '#': 0, // Home
        '#about': document.getElementById('about').offsetTop,
        '#experience': document.getElementById('experience').offsetTop,
        '#services': document.getElementById('services').offsetTop,
        '#contact': document.getElementById('contact').offsetTop,
      };

      // Determine the active section based on scroll position
      let activeSection = '#';
      for (const section in sections) {
        if (scrollY >= sections[section]) {
          activeSection = section;
        }
      }

      // Update the activeNav state
      setActiveNav(activeSection);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run this effect only once

  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}>
        <BiHome />
      </a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''}>
        <BsBookHalf />
      </a>
      <a href="#services" className={activeNav === '#services' ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''}>
        <BiMessageDetail />
      </a>
    </nav>
  );
}

export default Nav;
