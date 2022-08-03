import React from 'react'
import { Link } from 'react-scroll'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="trapezoid"></div>
      <div className="links-navbar">
        <Link to="projects" spy={true} smooth={true} offset={0} duration={500}>
          Project
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Navbar
