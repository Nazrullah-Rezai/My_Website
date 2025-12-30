import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";
import nrLogo from "../../assets/images/nrLogo.png";
import sidebarMenu from "../../assets/icons/Sidebar-Menu.svg";
import { toggleSidebar } from "../../utils";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Services", href: "#services" },
    { id: 4, name: "Portfolio", href: "#portfolio" },
    { id: 5, name: "Blog", href: "#blog" },
    { id: 6, name: "Contact", href: "#contact" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`Navbar${scrolled ? " scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="Navbar-container">
        <div className="Navbar-flex">
          <div className="Logo-wrapper">
            <img
              src={nrLogo}
              alt="Logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/32";
              }}
            />
          </div>

          <div className="Nav-items">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`Nav-btn${
                  activeSection === item.name.toLowerCase() ? " active" : ""
                }`}
                aria-current={
                  activeSection === item.name.toLowerCase() ? "page" : undefined
                }
              >
                {item.name}
                <span className="underline" />
              </button>
            ))}
            <img
              className="sidebar-icon"
              src={sidebarMenu}
              alt=""
              onClick={() => toggleSidebar()}
            />
          </div>

          {/* <div className="Mobile-flex">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="menu-toggle"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <FiX className="menu-icon" />
              ) : (
                <FiMenu className="menu-icon" />
              )}
            </button>
          </div> */}
        </div>
      </div>

      {/* <div className={`Nav-Mobile-items${isOpen ? " open" : ""}`}>
        <div className="Nav-Mobile-flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.name.toLowerCase())}
              className={`menu-button${
                activeSection === item.name.toLowerCase() ? " active" : ""
              }`}
              aria-current={
                activeSection === item.name.toLowerCase() ? "page" : undefined
              }
            >
              {item.name}
            </button>
          ))}
        </div>
      </div> */}
    </nav>
  );
};

export default NavBar;
