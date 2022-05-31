import React from 'react';
import "../app.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="trapezoid"></div>
      <div className="links-navbar">
        <button>
          Project</button>
        <button>Contact</button>
      </div>
    </div>
  )
}

export default Navbar;
