import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <p className="hero-label">Web Developer & Designer</p>
        <h1 className="hero-title">
          Building <span className="gradient">digital experiences</span> that inspire.
        </h1>
        <p className="hero-subtitle">
          Clean code. Thoughtful design. Real results.
        </p>
        <div className="hero-buttons">
          <button className="hero-btn hero-btn-primary">View My Work</button>
          <button className="hero-btn hero-btn-secondary">
            Learn more <span>→</span>
          </button>
        </div>
        <div className="scroll-indicator">Scroll</div>
      </section>

      <section className="features">
        <div className="features-inner">
          <h2 className="features-title">What I do best.</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">◈</div>
              <h3 className="feature-title">Web Development</h3>
              <p className="feature-desc">
                Modern, responsive websites built with React and the latest technologies.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">◇</div>
              <h3 className="feature-title">UI/UX Design</h3>
              <p className="feature-desc">
                Intuitive interfaces that look beautiful and feel natural to use.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">○</div>
              <h3 className="feature-title">Performance</h3>
              <p className="feature-desc">
                Fast, optimized code that delivers smooth user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
