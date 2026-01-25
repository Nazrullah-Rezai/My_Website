import React from "react";
import "./About.css";
import { FaCode, FaGraduationCap, FaBriefcase, FaHeart } from "react-icons/fa";

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "HTML/CSS", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"] },
    { category: "Tools", items: ["Git", "VS Code", "npm/yarn", "webpack", "Docker"] },
    { category: "Other", items: ["Responsive Design", "UI/UX", "Problem Solving", "Team Work"] },
  ];

  const timeline = [
    {
      year: "2020",
      title: "Web Development Journey Started",
      description: "Began learning web development with a passion for creating beautiful and functional websites.",
    },
    {
      year: "2021",
      title: "React Mastery",
      description: "Deep dive into React.js and modern JavaScript frameworks. Built multiple projects.",
    },
    {
      year: "2022",
      title: "Full Stack Development",
      description: "Expanded skills to backend development with Node.js and database management.",
    },
    {
      year: "2024",
      title: "Professional Developer",
      description: "Currently working on innovative web solutions and mentoring aspiring developers.",
    },
  ];

  return (
    <section className="About" id="about">
      <div className="about-container">
        <div className="about-header">
          <h1>About Me</h1>
          <p className="subtitle">A passionate web developer from Darmstadt</p>
        </div>

        {/* Intro Section */}
        <div className="about-intro">
          <div className="intro-text">
            <h2>Who I Am</h2>
            <p>
              I'm Nazrullah Rezai, a full-stack web developer with a passion for creating modern, responsive, and user-friendly web applications. With expertise in React, JavaScript, and modern web technologies, I transform ideas into digital solutions.
            </p>
            <p>
              Based in Darmstadt, Germany, I work with both startups and established companies to build web applications that users love. My approach combines clean code, modern design principles, and attention to user experience.
            </p>
          </div>
          <div className="intro-icon">
            <FaCode size={80} />
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h2>My Skills</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-group">
                <h3>{skillGroup.category}</h3>
                <ul>
                  {skillGroup.items.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="timeline-section">
          <h2>My Journey</h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  {index < timeline.length - 1 && <div className="timeline-line"></div>}
                </div>
                <div className="timeline-content">
                  <h3>{item.year}</h3>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h2>What I Value</h2>
          <div className="values-grid">
            <div className="value-card">
              <FaCode size={40} />
              <h3>Clean Code</h3>
              <p>Writing maintainable, readable, and efficient code is a priority.</p>
            </div>
            <div className="value-card">
              <FaHeart size={40} />
              <h3>User Experience</h3>
              <p>Creating intuitive interfaces that users enjoy is essential.</p>
            </div>
            <div className="value-card">
              <FaBriefcase size={40} />
              <h3>Innovation</h3>
              <p>Staying updated with latest technologies and best practices.</p>
            </div>
            <div className="value-card">
              <FaGraduationCap size={40} />
              <h3>Learning</h3>
              <p>Continuous improvement and sharing knowledge with others.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
