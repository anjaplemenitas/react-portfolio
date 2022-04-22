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
  // let data = ["Ram", "Shyam", "Sita", "Gita"];
  // let list = document.getElementById("myList");

  return (
    <div>
      <div>Projects</div>
      <hr className="main-line"></hr>
      {
        data.map(({id, title, type, made_with, github}) => {
          return (
            <section className="project-container">
              <div className="project-img">
                <img scr="/" alt="/"></img>
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
            </section>
          )
          })
        }
    </div>
  )
}

export default Projects
