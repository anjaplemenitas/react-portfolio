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
      <div className="contact-info">
        <h3>
          Email:
          <a href="anja.plemenitas@gmail.com"> anja.plemenitas@gmail.com</a>
        </h3>
        <h3>You can also use the form below:</h3>
        <form ref={form} onSubmit={sendEmail}>
          <div className="container-form">
            <div className="form-input">
              <div className="text-input">
                <label>
                  <input type="text" name="subject" placeholder="Subject" />
                </label>
                <label>
                  <input type="text" name="name" placeholder="Name" />
                </label>
                <label>
                  <input type="text" name="email" placeholder="Email" />
                </label>
              </div>
              <div className="text-area-input">
                <label>
                  <textarea
                    type="textarea"
                    name="message"
                    placeholder="Message"
                  />
                </label>
              </div>
            </div>
            <button type="submit" value="Submit">
              Submit
            </button>
          </div>
        </form>
      </div>

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
