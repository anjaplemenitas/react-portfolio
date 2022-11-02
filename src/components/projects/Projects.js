import React from 'react'
import './projects.css'
import data from './portfolio.js'
import { FaGithub } from 'react-icons/fa'
import { FaLink } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import FadeInRight from '../animation/FadeInRight'

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

class Youtube extends React.Component {
  render() {
    return <FaYoutube />
  }
}

//

function Projects() {
  return (
    <React.Fragment>
      <div className="project" id="projects">
        <h3>Projects</h3>
        <hr className="main-line-projects"></hr>
      </div>
      <div className="project-container">
        {data.map(
          ({
            id,
            image,
            title,
            type,
            made_with,
            details,
            github,
            link,
            youtube,
          }) => {
            return (
              <FadeInRight>
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
                    {/* TODO:  add small option for the line */}
                    <hr class="w-96 border-1 border-black cursor-pointer  dark:border-white" />
                    <ul className="project-details">
                      {details.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="links-media">
                      <a href={github}>
                        <Github />
                      </a>
                      {typeof link !== 'undefined' ? (
                        <a href={link}>
                          {' '}
                          <Link />{' '}
                        </a>
                      ) : (
                        <span></span>
                      )}
                      {typeof youtube !== 'undefined' ? (
                        <a href={youtube}>
                          {' '}
                          <Youtube />{' '}
                        </a>
                      ) : (
                        <span></span>
                      )}
                    </div>
                  </div>
                </div>
              </FadeInRight>
            )
          },
        )}
      </div>
    </React.Fragment>
  )
}

export default Projects
