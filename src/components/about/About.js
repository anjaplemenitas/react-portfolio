import React from 'react'
import './about.css'
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <div className="about">
      <motion.div
        className="box"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 4,
        }}
      >
        <div className="about-name">ANJA PLEMENITAS</div>
        <div className="about-title">
          Full Stack web <br></br> developer.
        </div>
      </motion.div>
      <div className="about-more">
        <a href="https://drive.google.com/file/d/1Q6KTvbdCDk7W-IpjR2sWPrDCZCgsclrM/view?usp=sharing">
          More about me
        </a>
      </div>
    </div>
  )
}

export default About
