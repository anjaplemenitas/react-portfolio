import React from 'react';
import "./projects.css";
import data from './portfolio.js';
import { FaGithub } from "react-icons/fa";



// logo
class Question extends React.Component {
  render() {
    return <FaGithub />
  }
}

function Projects() {
  return (
    <div className="project">
      <h3>Projects</h3>
      <hr className="main-line"></hr>
      <section className="project-container">
      {
        data.map(({id, image, title, type, made_with, github}) => {
          return (
              <div key={id} className="portfolio-items">
                <div className="project-img">
                  <img src={image} alt={title}></img>
                </div>
                <div className="project-info">
                  <div className="project-title">
                    <h3>{title}</h3>
                    <h4>{type}</h4>
                  </div>
                  <div className="project-links">
                    <ul className="project-made-with">
                    { made_with.map((item) =>
                      <li>{item}</li>
                    )}
                    </ul>
                    <a href={github}><Question /></a>
                  </div>
                </div>
              </div>
          )
        })
      }
      </section>
    </div>
  )
}

export default Projects
