import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import "./Footer.css";
import { useI18n } from "../../utils/i18n";

const Footer = () => {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#" + sectionId;
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
            {t("nav_about")}
          </a>
          <a href="#services" className="footer-link" onClick={(e) => scrollToSection(e, "services")}>
            {t("nav_services")}
          </a>
          <a href="#portfolio" className="footer-link" onClick={(e) => scrollToSection(e, "portfolio")}>
            {t("footer_portfolio")}
          </a>
          <a href="#contact" className="footer-link" onClick={(e) => scrollToSection(e, "contact")}>
            {t("nav_contact")}
          </a>
          <Link to="/imprint" className="footer-link">
            {t("footer_imprint")}
          </Link>
          <Link to="/privacy" className="footer-link">
            {t("footer_privacy")}
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
          © {currentYear} Nazrullah Rezai. {t("footer_copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
