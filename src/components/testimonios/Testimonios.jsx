import React from 'react'
import './Testimonios.css'
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data= [
  {
    avatar: Avatar1,
    name: 'Emma Bennett',
    review: 'seasoned graphic designer, praises the meticulous attention to detail and creative flair showcased in the portfolio.She commends the seamless integration of design elements and the ability to convey a strong visual narrative'
  },
  {
    avatar: Avatar2,
    name: 'Alex Reynolds',
    review: 'software development expert, applauds the technical prowess demonstrated in the portfolio. He highlights the innovative solutions presented and notes the clarity in code structure, emphasizing the candidate'
  },
  {
    avatar: Avatar3,
    name: 'Marcus Mitchell',
    review: 'renowned photographer, expresses admiration for the exceptional composition and storytelling evident in the portfolio. He commends the photographer and storytelling evident in the portfolio. He commends the photographer '
  },
  {
    avatar: Avatar4,
    name: 'Taylor Harper',
    review: 'experienced content strategist, commends the writing portfolio for its versatility and engaging content. Harper appreciates the ability to adapt tone and style across different topics, noting the strong communication skills demonstrated in the writing samples'
   },
];

const Testimonios = () => {
  return (
    <section id='testimonios'>
      <h5>Review From My Clients</h5>
      <h2>Testimonies</h2>

      <Swiper className="container testimonies-container"  modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonie">
          <div className="clients-avatar">
            <img src={avatar} alt="Avatar one" />
          </div>
            <h5 className='clients-name'>{name}</h5>
            <small className="clients-review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonios
