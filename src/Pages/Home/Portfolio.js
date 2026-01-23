import React from "react";
import "./Home.css";
import profileImage from "../../assets/images/portfoli-without-background.png";
import Button from "../../components/Button";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaRocket, FaPalette } from "react-icons/fa";

const Portfolio = () => {
  const handleViewWork = () => {
    const blogSection = document.getElementById("blog");
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const skills = [
    { icon: <FaCode />, title: "Web Development", desc: "React, JavaScript, HTML/CSS" },
    { icon: <FaRocket />, title: "Performance", desc: "Fast & Optimized Applications" },
    { icon: <FaPalette />, title: "Design", desc: "Modern & Responsive UX" },
  ];

  return (
    <div className="Portfolio">
      <div className="portfolio-text">
        <div className="portfolio-header">
          <h1 className="portfolio-title">Nazrullah Rezai</h1>
          <p className="portfolio-subtitle">Full Stack Web Developer</p>
        </div>
        
        <p className="portfolio-description">
          I'm a passionate web developer based in Darmstadt, Germany. I create modern, responsive web applications with a focus on user experience and clean code.
        </p>

        <div className="portfolio-cta">
          <Button className="BubbleButton btn-primary" onClick={handleViewWork}>View My Work</Button>
          <Button className="BubbleButton btn-secondary" onClick={handleContact}>Contact Me</Button>
        </div>

        <div className="portfolio-socials">
          <a href="https://github.com/Nazrullah-Rezai" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nazrullah-rezai" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:nasrollah.rzi@gmail.com" className="social-link" title="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="portfolio-myImage">
        <div className="image-container">
          <img src={profileImage} alt="Nazrullah Rezai" />
          <div className="image-glow"></div>
        </div>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
