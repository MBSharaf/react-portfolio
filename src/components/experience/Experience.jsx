import React from 'react'
import './Experience.css'
import { BiSolidBadgeCheck } from "react-icons/bi";


const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">

        <div className="experience-frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience-content">
            <article className='experience-details'>
              <BiSolidBadgeCheck  className='experience-details-icons'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience-details'>
              <BiSolidBadgeCheck  className='experience-details-icons'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience-details'>
              <BiSolidBadgeCheck  className='experience-details-icons'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience-details'>
              <BiSolidBadgeCheck  className='experience-details-icons'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience-details'>
              <BiSolidBadgeCheck  className='experience-details-icons'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience-details'>
              <BiSolidBadgeCheck  className='experience-details-icons'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience-backend">
          <h3>BackEnd Development</h3>
          <div className="experience-content">
            <article className='experience-details'>
              <BiSolidBadgeCheck  className='experience-details-icons'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience-details'>
              <BiSolidBadgeCheck  className='experience-details-icons'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience-details'>
              <BiSolidBadgeCheck  className='experience-details-icons'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Basics</small>
              </div>
            </article>

            <article className='experience-details'>
              <BiSolidBadgeCheck  className='experience-details-icons'/>
              <div>
                <h4>MYSQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience-details'>
              <BiSolidBadgeCheck  className='experience-details-icons'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
