import React, { useState } from "react";
import "./Navbar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["About", "Work", "Skills", "Contact"];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#home" className="navbar-logo">Nazrullah Rezai</a>

          <div className="navbar-links">
            {navItems.map((item) => (
              <button key={item}>{item}</button>
            ))}
            <button className="navbar-cta">Hire Me</button>
          </div>

          <button
            className={`menu-toggle ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <button key={item} onClick={closeMenu}>{item}</button>
        ))}
        <button className="mobile-cta" onClick={closeMenu}>Hire Me</button>
      </div>
    </>
  );
};

export default NavBar;
