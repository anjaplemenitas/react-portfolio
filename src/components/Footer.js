import React from 'react';
import "../app.css";
import { FaGithub } from "react-icons/fa";

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaGithub />? </h3>
  }
}

export const Footer = () => {
  return (
    <div>
      <div>Designed & Built by Anja Plemenitas</div>
      <div>  • React  • CSS  • Html  • JavaScript  </div>
      <Question />
    </div>
  )
}

export default Footer;
