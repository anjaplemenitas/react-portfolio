import React from 'react'
import './projects.css'
import data from './portfolio.js'
import { FaGithub } from 'react-icons/fa'
import { FaLink } from 'react-icons/fa'
import { motion } from 'framer-motion'

// logo
class Github extends React.Component {
  render() {
    return <FaGithub />
  }
}

class Link extends React.Component {
  render() {
    return <FaLink />
  }
}

const fromRight = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 30 },
}

function Projects() {
  return (
    <React.Fragment>
      <div className="project" id="projects">
        <h3>Projects</h3>
        <hr className="main-line-projects"></hr>
      </div>
      <motion.div variants={fromRight}>
        <div className="project-container">
          {data.map(
            ({ id, image, title, type, made_with, details, github, link }) => {
              return (
                <div key={id} className="portfolio-items">
                  <img className="project-img" src={image} alt={title}></img>
                  <div className="project-info">
                    <div className="project-title">
                      <h3>{title}</h3>
                      <h4>{type}</h4>
                    </div>
                    <div className="project-links">
                      <ul className="project-made-with">
                        {made_with.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <hr class="w-96 border-1 border-black cursor-pointer" />
                    <ul className="project-details">
                      {details.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="links-media">
                      <a href={github}>
                        <Github />
                      </a>
                      <a href={link}>
                        <Link />
                      </a>
                    </div>
                  </div>
                </div>
              )
            },
          )}
        </div>
      </motion.div>
    </React.Fragment>
  )
}

export default Projects
