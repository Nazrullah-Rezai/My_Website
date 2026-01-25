import React, { useState, useEffect } from "react";
import { FiHome, FiUser, FiBriefcase, FiFolder, FiMail, FiChevronLeft, FiMenu, FiX, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import "./Navbar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: FiHome },
    { id: "about", label: "About", icon: FiUser },
    { id: "services", label: "Services", icon: FiBriefcase },
    { id: "blog", label: "Projects", icon: FiFolder },
    { id: "contact", label: "Contact", icon: FiMail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileOpen(false);
    }
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMobile}>
        {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Overlay for mobile */}
      <div
        className={`sidebar-overlay ${isMobileOpen ? 'visible' : ''}`}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isMobileOpen ? 'mobile-open' : ''}`}>
        {/* Header */}
        <div className="sidebar-header">
          <a href="#home" className="sidebar-logo" onClick={() => scrollToSection('home')}>
            <div className="logo-icon">N</div>
            <span className="logo-text">Naz.dev</span>
          </a>
          <button className="sidebar-toggle" onClick={toggleCollapse}>
            <FiChevronLeft size={18} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <div className="nav-section">
            <div className="nav-section-title">Navigation</div>
            <div className="nav-items">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                  data-tooltip={item.label}
                >
                  <span className="nav-icon">
                    <item.icon />
                  </span>
                  <span className="nav-label">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <button
            className="sidebar-cta"
            onClick={() => scrollToSection('contact')}
          >
            <FiMail className="cta-icon" />
            <span className="cta-text">Get in Touch</span>
          </button>

          <div className="sidebar-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="sidebar-social">
              <FiGithub size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="sidebar-social">
              <FiLinkedin size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="sidebar-social">
              <FiTwitter size={16} />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
