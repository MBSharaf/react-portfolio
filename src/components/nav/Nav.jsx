import React from 'react'
import './Nav.css'
import { MdHome } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import { GrServices } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { useState } from 'react';



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#"onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : ''}><MdHome /></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme/></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === '#experience' ? 'active' : ''}><GrProjects/></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === '#services' ? 'active' : ''}><GrServices/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === '#contact' ? 'active' : ''}><IoIosContact/></a>
    </nav>
)
}

export default Nav
