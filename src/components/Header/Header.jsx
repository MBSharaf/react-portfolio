import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/1.png'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I`m</h5>
        <h1>SHARAF</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="" />
          <a href="#contact" className='scroll-down'>Scroll Down</a> 

        </div>
      </div>
    </header>
  )
}

export default Header
