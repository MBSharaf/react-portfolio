import React from 'react'
import './About.css'
import Image from '../../assets/2.JPG'
import { FaAward } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { LuFolderCheck } from "react-icons/lu";


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={Image} alt="About Image"/>
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about-card">
              <LuUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about-card">
              <LuFolderCheck className='about-icon'/>
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minus consequuntur pariatur. Nemo, facilis quidem. Ducimus,
            aliquam sequi! Ipsum quibusdam officiis in iste consequuntur tempore nulla debitis voluptas vero voluptatibus.
          </p>

          <a href="#contact" className='btn btn-primary'>Let`s Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
