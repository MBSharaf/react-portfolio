import React from 'react'
import './Portoflio.css'
import IMG3 from '../../assets/3.png'
import IMG4 from '../../assets/4.png'
import IMG5 from '../../assets/5.png'
import IMG6 from '../../assets/6.png'
import IMG7 from '../../assets/7.png'
import IMG9 from '../../assets/9.png'


const data = [
  {
    id: 1,
    image: IMG3,
    title: 'Project number 1',
    github: 'https//github.com',
    demo: 'https://dribbble.com/SharafDev'
  },
  {
    id: 2,
    image: IMG4,
    title: 'Project number 2',
    github: 'https//github.com',
    demo: 'https://dribbble.com/SharafDev'
  },
  {
    id: 3,
    image: IMG5,
    title: 'Project number 3',
    github: 'https//github.com',
    demo: 'https://dribbble.com/SharafDev'
  },
  {
    id: 4,
    image: IMG6,
    title: 'Project number 4',
    github: 'https//github.com',
    demo: 'https://dribbble.com/SharafDev'
  },
  {
    id: 5,
    image: IMG7,
    title: 'Project number 5',
    github: 'https//github.com',
    demo: 'https://dribbble.com/SharafDev'
  },
  {
    id: 6,
    image: IMG9,
    title: 'Project number 6',
    github: 'https//github.com',
    demo: 'https://dribbble.com/SharafDev'
  },
];

const Portoflio = () => {
  return (
    <section id='portoflio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container Portfolio-container">
        {
          data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='Portfolio-item'>
              <div className="Portfolio-item-image">
                <img src={image} alt={title} />
              </div>
                <h3>{title}</h3>
              <div className="portfolio-item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          )
          })
        }
        
      </div>
    </section>
  )
}

export default Portoflio
