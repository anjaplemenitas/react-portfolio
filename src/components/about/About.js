import React from 'react'
import './about.css'
import { motion } from 'framer-motion'
import Cv from '/Users/anja.plemenitas/code/anjaplemenitas/portfolio_page/src/assets/anja_plemenitas_cv.pdf'

export const About = () => {
  const container = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  }
  const item = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <div className="about">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item}>
          <div className="about-name">ANJA PLEMENITAS</div>
        </motion.div>
        <motion.div variants={item}>
          <div className="about-title">
            Full Stack web <br></br> developer.
          </div>
        </motion.div>
      </motion.div>

      <div className="about-more">
        <a href={Cv} download="anja_plemenitas_cv">
          Download CV
        </a>
      </div>
    </div>
  )
}

export default About
