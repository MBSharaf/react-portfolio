import React from 'react'
import './Services.css'
import { GrFormCheckmark } from "react-icons/gr";


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service-container">
        <article className='services'>
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service-list'>
              <li>
                <GrFormCheckmark className='service-list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>

              <li>
                <GrFormCheckmark className='service-list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>

              <li>
                <GrFormCheckmark className='service-list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>

              <li>
                <GrFormCheckmark className='service-list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>

              <li>
                <GrFormCheckmark className='service-list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
            </ul>
        </article>
        {/* End OF UI/UX */}

        <article className='services'>
          <div className="service-head">
            <h3>Web Development</h3>
          </div>
          <ul className='service-list'>
              <li>
                <GrFormCheckmark className='service-list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>

              <li>
                <GrFormCheckmark className='service-list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>

              <li>
                <GrFormCheckmark className='service-list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>

              <li>
                <GrFormCheckmark className='service-list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>

              <li>
                <GrFormCheckmark className='service-list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              
              <li>
                <GrFormCheckmark className='service-list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
            </ul>
        </article>

        {/* End of web development */}

        <article className='services'>
          <div className="service-head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service-list'>
              <li>
                <GrFormCheckmark className='service-list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>

              <li>
                <GrFormCheckmark className='service-list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>

              <li>
                <GrFormCheckmark className='service-list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>

              <li>
                <GrFormCheckmark className='service-list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>

              <li>
                <GrFormCheckmark className='service-list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
            </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
