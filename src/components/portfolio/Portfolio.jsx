import React from 'react'
import './portfolio.css'
import IMG0 from '../../assets/portfolio0.jpg'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/Smile.jpeg'
import IMG6 from '../../assets/chatapp.png'
const data = [
  {
    id:0,
    image:IMG0,
    title:'React-Portfolio-Website',
    github:'https://github.com/MuhammedSm/Portfolio-react-website',
    
  },{
    id:1,
    image:IMG6,
    title:'Muhammed Chat(Web Chat App)',
    github:'https://github.com/MuhammedSm/React-chat-app',
    
  },
  {
    id:2,
    image:IMG5,
    title:'Smile!(Attendance Taking System Using Facial Recognition)',
    github:'https://github.com/MuhammedSm/senior-project-Smile---',
    
  },
  {
    id:3,
    image:IMG1,
    title:'Personal-Voice-Assistant-Java',
    github:'https://github.com/MuhammedSm/Personal-Voice-Assistant-Java',
    
  },
  {   id:4, 
      image:IMG2,
      title: 'Vaccination-Clinic-System-Java', 
      github: 'https://github.com/MuhammedSm/Vaccination-Clinic-System', 
      
  }, 
  { 
      id: 5, 
      image: IMG3,
      title: 'Movie Rating DataBase Website', 
      github: 'https://github.com/MuhammedSm/movie-rating-db',
       
   },{
     id: 6, 
      image: IMG4,
      title: 'Frontend-Clothing-Website',
      github: 'https://github.com/MuhammedSm/Clothing-Front-End-Website-main', 
     
   },
    ]



    function portfolio() {
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
                    {id === 1 && (
                      <a href="https://muhammesdseyhmusachatapp.netlify.app" className="btn btn-primary">
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
    

export default portfolio