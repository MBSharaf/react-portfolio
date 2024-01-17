import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoDribbble } from "react-icons/io";




function HeaderSocial() {
  return (
    <div className='header-social'>
          <a href="https//linkedin.com" target="_blank"><FaLinkedin/></a>
          <a href="https//github.com" target="_blank"><FaGithub/></a>
          <a href="https//dribble.com" target="_blank"><IoLogoDribbble/></a>
    </div>
  )
}

export default HeaderSocial
