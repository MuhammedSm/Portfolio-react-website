import React from 'react';
import './portfolio.css';
import IMGP from '../../assets/image.png';
import IMGFW from '../../assets/fw.png';
import IMG0 from '../../assets/portfolio0.jpg';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/Smile.jpeg';
import IMG6 from '../../assets/chatapp.png';

const data = [
  {
    id: 0,
    image: IMGP,
    title: 'Future Restaurant',
    github: 'https://github.com/MuhammedSm/restaurant',
    demo: 'https://futurerestaurant.netlify.app/'
  },
  {
    id: 1,
    image: IMGFW,
    title: 'FreeLance Website',
    github: '',
    demo: 'https://webcapsule.netlify.app/'
  },
  {
    id: 2,
    image: IMG0,
    title: 'React-Portfolio-Website',
    github: 'https://github.com/MuhammedSm/Portfolio-react-website',
    demo: 'https://your-portfolio-website-demo-url.com' 
  },
  {
    id: 3,
    image: IMG6,
    title: 'Muhammed Chat(Web Chat App)',
    github: 'https://github.com/MuhammedSm/React-chat-app',
    demo: 'https://muhammesdseyhmusachatapp.netlify.app'
  },
  {
    id: 4,
    image: IMG5,
    title: 'Smile!(Attendance Taking System Using Facial Recognition)',
    github: 'https://github.com/MuhammedSm/senior-project-Smile---',
    demo: '' // No demo URL available
  },
  {
    id: 5,
    image: IMG1,
    title: 'Personal-Voice-Assistant-Java',
    github: 'https://github.com/MuhammedSm/Personal-Voice-Assistant-Java',
    demo: '' // No demo URL available
  },
  {
    id: 6,
    image: IMG2,
    title: 'Vaccination-Clinic-System-Java',
    github: 'https://github.com/MuhammedSm/Vaccination-Clinic-System',
    demo: '' // No demo URL available
  },
  {
    id: 7,
    image: IMG3,
    title: 'Movie Rating DataBase Website',
    github: 'https://github.com/MuhammedSm/movie-rating-db',
    demo: '' // No demo URL available
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn btn-primary">
                  Github
                </a>
                {demo && (
                  <a href={demo} className="btn btn-primary">
                    Demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
