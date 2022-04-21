import React from 'react';
import "./contact.css";


export const Contact = () => {
  return (
    <div className="contact">
        <h1>Contact</h1>
      <hr className="main-line"></hr>
        <h3>anja.plemenitas@gmail.com</h3>
      <div className="socials">
          <h2>Socials</h2>
        <hr className="small-line"></hr>
        <ul>
          <li>Linkedin</li>
          <li>GitHub</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
  )
}

export default Contact;
