import React from 'react';
import "../app.css";

export const Navbar = () => {
  return (
    <div>
      <div className="parallelogram"></div>
      <div className="links-navbar">
        <a href="/" style={{ textDecoration: 'none', color: 'black' }}>Project</a>
        <a href="/" style={{ textDecoration: 'none', color: 'black' }}>Contact</a>
      </div>
    </div>
  )
}

export default Navbar;
