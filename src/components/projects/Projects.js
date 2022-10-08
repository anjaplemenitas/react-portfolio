import React from 'react'
import './projects.css'
import data from './portfolio.js'
import { FaGithub } from 'react-icons/fa'

// logo
class Question extends React.Component {
  render() {
    return <FaGithub />
  }
}

function Projects() {
  return (
    <React.Fragment>
      <div className="project" id="projects">
        <h3>Projects</h3>
        <hr className="main-line-projects"></hr>
      </div>
      <div>
        <div className="project-container">
          {data.map(({ id, image, title, type, made_with, github }) => {
            return (
              <a key={id} href={github} className="portfolio-items">
                <div className="project-img">
                  <img src={image} alt={title}></img>
                </div>
                <div className="project-info">
                  <div className="project-title">
                    <h3>{title}</h3>
                    <h4>{type}</h4>
                    <a href={github}>
                      <Question />
                    </a>
                  </div>
                  <div className="project-links">
                    <ul className="project-made-with">
                      {made_with.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Projects
