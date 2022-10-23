import React from 'react'
import Header from './components/header/Header.jsx'
import About from './components/about/About.jsx'
import Projects from './components/projects/Projects.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import Animation from './components/animation/Animation.jsx'


const App = () => {
  return (
    <>
    <Animation/>
    <Header/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App