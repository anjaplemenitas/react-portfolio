import React from 'react'
import './contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_x4y6f8q',
        'template_dfmm4ll',
        form.current,
        'CPg5MsagzpFeQkOr-',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
    e.target.reset()
  }

  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <hr className="main-line"></hr>
      <h3>anja.plemenitas@gmail.com</h3>

      <form ref={form} onSubmit={sendEmail}>
        <label>
          Subject:
          <input type="text" name="subject" />
        </label>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Message:
          <input type="text" name="message" />
        </label>
        <input type="submit" value="Submit" />
      </form>

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
