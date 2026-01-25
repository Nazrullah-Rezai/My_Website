import React from "react";
import { FiArrowRight } from "react-icons/fi";
import "./Home.css";
import profileImage from "../../assets/images/portfoli-without-background.png";

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-greeting">
            <span className="greeting-line"></span>
            <span>Hello, I'm</span>
          </div>

          <h1 className="hero-title">
            Nazrullah<span className="gradient">.</span>
          </h1>

          <h2 className="hero-role">
            <span className="role-dynamic gradient">Full-Stack Developer</span>
          </h2>

          <p className="hero-subtitle">
            Crafting digital experiences that leave an impression.
            I specialize in building exceptional websites, applications,
            and everything in between.
          </p>

          <div className="hero-buttons">
            <button
              className="hero-btn hero-btn-primary"
              onClick={() => scrollToSection('blog')}
            >
              View My Work
              <FiArrowRight />
            </button>
            <button
              className="hero-btn hero-btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Clients</div>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <div className="image-backdrop"></div>
            <div className="image-glow"></div>
            <div className="image-ring"></div>
            <div className="image-ring image-ring-2"></div>
            <img src={profileImage} alt="Naz - Developer" className="hero-image" />
          </div>
          <div className="floating-badge floating-badge-1">
            <span className="badge-dot"></span>
            <span>Available for work</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Home;
