import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Services", href: "#services" },
    { id: 4, name: "Portfolio", href: "#portfolio" },
    { id: 5, name: "Contact", href: "#contact", cta: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

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
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, "#home")}>
          Nazrullah Rezai
        </a>

        <div className={`Nav-items ${isMenuOpen ? "mobile-open" : ""}`}>
          {navItems.map((item) => (
            item.href.startsWith("/") ? (
              <Link
                key={item.id}
                to={item.href}
                className={`Nav-btn ${item.cta ? "cta" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                {!item.cta && <span className="underline" />}
              </Link>
            ) : (
              <a
                key={item.id}
                href={item.href}
                className={`Nav-btn ${item.cta ? "cta" : ""}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
                {!item.cta && <span className="underline" />}
              </a>
            )
          ))}
        </div>

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
    </nav>
  );
};

export default NavBar;
