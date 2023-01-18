import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'


// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
  {
      avatar: AVTR1, 
      name: 'Samir Ghalayini', 
      review: 'Awsome work, keep up the good work.Looking forward for your upcoming work' 
  }, 
  {
      avatar: AVTR2, 
      name:'Omar Orfali',
      review: 'I like the designs, the colors fit so well together making the website come to life ' 
},
{

      avatar: AVTR3,
       name: 'Dayan Cheikh Moussa',
        review: 'I liked the movie rating website, it was clean and easy to use.Keep up the good work' 
},

]


function testimonials() {
  return (
    <section id="testimonials">
      <h5>Reviews and feedback</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container" 
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       >
        {
          data.map(({avatar,name,review},index)=>{
            return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} />
              
            </div>
            <h5 className="client__name">{name}</h5>
              <small className='client__review'>
                {review}
              </small>
          </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials