import React from "react";
import { motion } from "framer-motion";
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
    <motion.div 
      className="Portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="portfolio-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div 
          className="portfolio-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="portfolio-title">Nazrullah Rezai</h1>
          <p className="portfolio-subtitle">Full Stack Web Developer</p>
        </motion.div>
        
        <motion.p 
          className="portfolio-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          I'm a passionate web developer based in Darmstadt, Germany. I create modern, responsive web applications with a focus on user experience and clean code.
        </motion.p>

        <motion.div 
          className="portfolio-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button className="BubbleButton btn-primary" onClick={handleViewWork}>View My Work</Button>
          <Button className="BubbleButton btn-secondary" onClick={handleContact}>Contact Me</Button>
        </motion.div>

        <motion.div 
          className="portfolio-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a href="https://github.com/Nazrullah-Rezai" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nazrullah-rezai" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:nasrollah.rzi@gmail.com" className="social-link" title="Email">
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="portfolio-myImage"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div 
          className="image-container"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={profileImage} alt="Nazrullah Rezai" />
          <div className="image-glow"></div>
        </motion.div>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
