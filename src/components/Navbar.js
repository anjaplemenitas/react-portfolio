import React from 'react';
import "../app.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="trapezoid"></div>
      <div className="links-navbar">
        <a href="/">Project</a>
        <a href="/">Contact</a>
      </div>
    </div>
  )
}

export default Navbar;
