import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Projects from './/components/projects/Projects.js'

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
