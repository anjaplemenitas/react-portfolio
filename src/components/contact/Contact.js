import React from 'react'
import './contact.css'

export const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <hr className="main-line"></hr>
      <h3>anja.plemenitas@gmail.com</h3>
      <div className="socials">
        <h2>Socials</h2>
        <hr className="small-line"></hr>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/anjaplemenitas/">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/anjaplemenitas">GitHub</a>
          </li>
          <li>
            <a href="https://www.instagram.com/anjaplemenitas">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
