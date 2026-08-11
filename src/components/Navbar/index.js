import React, { useState, useEffect, useMemo } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import { useI18n } from "../../utils/i18n";
import logoImage from "../../assets/images/Mein_Logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { lang, setLang, t } = useI18n();

  const navItems = useMemo(
    () => [
      { id: "home", label: t("nav_home") },
      { id: "about", label: t("nav_about") },
      { id: "services", label: t("nav_services") },
      { id: "blog", label: t("nav_projects") },
      { id: "contact", label: t("nav_contact") },
    ],
    [t]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const setActiveOnScroll = () => {
      const probe = window.scrollY + window.innerHeight * 0.25; // watch a point 25% below top
      let current = navItems[0]?.id || "home";

      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + el.offsetHeight;
        if (probe >= top && probe < bottom) {
          current = item.id;
        }
      });

      setActiveSection(current);
    };

    setActiveOnScroll();
    window.addEventListener("scroll", setActiveOnScroll, { passive: true });
    window.addEventListener("resize", setActiveOnScroll);

    return () => {
      window.removeEventListener("scroll", setActiveOnScroll);
      window.removeEventListener("resize", setActiveOnScroll);
    };
  }, [navItems]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileOpen(false);
    } else {
      window.location.href = "/#" + sectionId;
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logoImage} alt="Logo" className="logo-img" loading="lazy" />
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="navbar-controls">
          <button
            className={`theme-toggle ${isDark ? "is-dark" : "is-light"}`}
            onClick={toggleTheme}
            title={isDark ? "Light Mode" : "Dark Mode"}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            type="button"
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          
          <select value={lang} onChange={(e) => setLang(e.target.value)} className="lang-select">
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="da">Dari</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="navbar-mobile">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
