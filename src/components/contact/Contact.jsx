import React from 'react'
import './Contact.css'
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {
  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ppa74p8', 'template_k7n3eg4', form.current, 'qpUqgDTIPubzqKMUg')
      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className='contact-option'>
            <AiOutlineMail className='contact-option-icon'/>
            <h4>Email</h4>
            <h5>Msharf576@gmail.com</h5>
            <a href="mailto:msharf576@gmail.com" target='_blank'>Send a Message</a>
          </article>

          <article className='contact-option'>
            <FaFacebookMessenger className='contact-option-icon'/>
            <h4>Messenger</h4>
            <h5>Mohamed Sharaf</h5>
            <a href="https://m.me/mohamed.bogy.792" target='_blank'>Send a Message</a>
          </article>

          <article className='contact-option'>
            <FaWhatsapp className='contact-option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+201024549574</h5>
            <a href="https://api.whatsapp.com/sent?phone=+201024549574" target='_blank'>Send a Message </a>
          </article>
        </div>

         <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="Message" rows="7" placeholder="Your Message" required ></textarea>
            <button type='submit' className='btn btn-primary'> Send a Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact
