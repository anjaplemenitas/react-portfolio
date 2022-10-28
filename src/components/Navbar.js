import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="trapezoid"></div>
      <motion.div
        className="box"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
        }}
      >
        <div className="links-navbar">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Project
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
