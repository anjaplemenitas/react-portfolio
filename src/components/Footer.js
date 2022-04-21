import React from 'react';
import "../app.css";
import { FaGithub } from "react-icons/fa";

class Question extends React.Component {
  render() {
    return <FaGithub />
  }
}

export const Footer = () => {
  return (
    <div className="footer">
      <div className="built-with-footer">
        <div>• React  • CSS  • Html  • JavaScript</div>
        <a href="/"><Question /></a>
      </div>
      <div className="title-footer">Designed & Built by Anja Plemenitas</div>
    </div>
  )
}

export default Footer;
