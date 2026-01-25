import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer>
      <div className="footer-content">
        <a
          href="#home"
          className="footer-brand"
          onClick={(e) => scrollToSection(e, "home")}
        >
          Nazrullah Rezai
        </a>

        <div className="footer-links">
          <a href="#about" className="footer-link" onClick={(e) => scrollToSection(e, "about")}>
            About
          </a>
          <a href="#services" className="footer-link" onClick={(e) => scrollToSection(e, "services")}>
            Services
          </a>
          <a href="#portfolio" className="footer-link" onClick={(e) => scrollToSection(e, "portfolio")}>
            Portfolio
          </a>
          <a href="#contact" className="footer-link" onClick={(e) => scrollToSection(e, "contact")}>
            Contact
          </a>
          <Link to="/imprint" className="footer-link">
            Imprint
          </Link>
          <Link to="/privacy" className="footer-link">
            Privacy
          </Link>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="Twitter"
          >
            <FiTwitter />
          </a>
          <a
            href="mailto:hello@nazrullahrezai.com"
            className="footer-social"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>

        <p className="footer-copyright">
          © {currentYear} Nazrullah Rezai. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
