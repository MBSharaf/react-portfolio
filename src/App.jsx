import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Portofolio from './components/portoflio/Portoflio'
import Service from './components/services/Services'
import Testimonios from './components/testimonios/Testimonios'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'


const App = () => {
  return (
    <div>
      <>
        <Header/>
        <Nav />
        <About />
        <Experience/>
        <Service />
        <Portofolio />
        <Testimonios />
        <Contact />
        <Footer />
       
      </>
    </div>
  )
}

export default App
