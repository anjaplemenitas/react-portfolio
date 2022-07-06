import React from 'react'
import '../app.css'
import { Link } from 'react-scroll'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="trapezoid"></div>
      <div className="links-navbar">
        <button>
          {/* <Link to="Projects" spy={true} smooth={true}> */}
          Project
          {/* </Link> */}
        </button>
        <button>Contact</button>
      </div>
    </div>
  )
}

// OnClick
// const scrollProjects = () =>
//   window.scrollTo({
//     bottom: project,
//     behavior: 'smooth',
//   })

// const scrollContacts = () => {
//   console.log('yes!')
// }

export default Navbar
