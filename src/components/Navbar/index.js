import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import nrLogo from "../../assets/images/nrLogo.png";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Services", href: "#services" },
    { id: 4, name: "Portfolio", href: "#portfolio" },
    { id: 5, name: "Blog", href: "#blog" },
    { id: 6, name: "Contact", href: "#contact" },
    { id: 7, name: "Imprint", href: "/imprint" },
    { id: 8, name: "Privacy", href: "/privacy" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    setIsMenuOpen(false);
    
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
      }
      setTimeout(() => {
        const id = href.slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      e.preventDefault();
    }
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

          <div className={`Nav-items ${isMenuOpen ? "mobile-open" : ""}`}>
            {navItems.map((item) => (
              item.href.startsWith("/") ? (
                <Link
                  key={item.id}
                  to={item.href}
                  className="Nav-btn"
                  onClick={handleNavClick}
                >
                  {item.name}
                  <span className="underline" />
                </Link>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  className="Nav-btn"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                  <span className="underline" />
                </a>
              )
            ))}
          </div>

          <div className="navbar-actions">
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              title={isDark ? "Light Mode" : "Dark Mode"}
            >
              {isDark ? (
                <FiSun className="theme-icon" size={20} />
              ) : (
                <FiMoon className="theme-icon" size={20} />
              )}
            </button>

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <FiX className="menu-icon" size={24} />
              ) : (
                <FiMenu className="menu-icon" size={24} />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
