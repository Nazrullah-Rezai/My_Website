import React from "react";
import { FiArrowRight } from "react-icons/fi";
import "./Home.css";

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <h1 className="hero-title">
        Crafting <span className="gradient">digital experiences</span> that leave an impression.
      </h1>
      <p className="hero-subtitle">
        Full-stack developer specializing in building exceptional websites,
        applications, and everything in between.
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
          Get in Touch <span>→</span>
        </button>
      </div>
      <div className="scroll-indicator">Scroll</div>
    </section>
  );
};

export default Home;
