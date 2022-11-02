import React from 'react'
import './contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

// Social media icons

class Linkedin extends React.Component {
  render() {
    return <FaLinkedin />
  }
}

class Instagram extends React.Component {
  render() {
    return <FaInstagram />
  }
}

class Github extends React.Component {
  render() {
    return <FaGithub />
  }
}

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
    <div className="contact">
      <h1>Contact</h1>
      {/* <hr className="main-line"></hr> */}
      <hr class="w-96 border-1 border-black cursor-pointer dark:border-white" />
      <div className="contact-info">
        <h3>
          Email:
          <a href="anja.plemenitas@gmail.com"> anja.plemenitas@gmail.com</a>
        </h3>
        <h3>You can also use the form below:</h3>
        <form ref={form} onSubmit={sendEmail} className="container-form">
          {/* <div className="container-form"> */}
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
          {/* </div> */}
        </form>
      </div>

      <div className="socials">
        <h2>Socials</h2>
        <hr class="w-96 border-1 border-black cursor-pointer dark:border-white" />
        {/* <hr className="small-line"></hr> */}
        <div className="socials-link">
          <a href="https://www.linkedin.com/in/anjaplemenitas/">
            <Linkedin /> Linkedin
          </a>
          <a href="https://github.com/anjaplemenitas">
            <Instagram />
            GitHub
          </a>
          <a href="https://www.instagram.com/anjaplemenitas">
            <Github />
            Instagram
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
