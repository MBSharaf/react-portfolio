import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer id='footer'>
      <a href="" className='footer-logo'>SHARAF Dev</a>

      <ul className='permalinks'>
        <li><a href="#">Hone</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-social">
        <a href="https://facebook.com"><FaFacebook/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
        <a href="https://x.com"><FaXTwitter/></a>
      </div>

      <div className="footer-copyright">
        <small>&Copy; SHARAF Dev - All Right reserved</small>
      </div>
    </footer>
  )
}

export default Footer
