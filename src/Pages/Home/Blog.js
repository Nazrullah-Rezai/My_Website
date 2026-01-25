import React from "react";
import "./Blog.css";
import { FaCalendar, FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const projects = [
    {
      id: 1,
      title: "TaxGo - Web Application",
      description: "A modern web application for tax management built with React and Node.js. Features include real-time calculations and secure data handling.",
      tags: ["React", "Node.js", "MongoDB", "Responsive Design"],
      image: "https://via.placeholder.com/400x300?text=TaxGo",
      link: "#",
      date: "Jan 2024",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing skills and projects. Built with React with modern animations and responsive design.",
      tags: ["React", "CSS3", "Animations", "Responsive"],
      image: "https://via.placeholder.com/400x300?text=Portfolio",
      link: "#",
      date: "Dec 2023",
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with product management, shopping cart, and payment integration.",
      tags: ["React", "Express", "MongoDB", "Stripe"],
      image: "https://via.placeholder.com/400x300?text=E-Commerce",
      link: "#",
      date: "Nov 2023",
    },
    {
      id: 4,
      title: "Chat Application",
      description: "Real-time chat application with user authentication and message persistence using Firebase.",
      tags: ["React", "Firebase", "WebSockets", "Authentication"],
      image: "https://via.placeholder.com/400x300?text=Chat+App",
      link: "#",
      date: "Oct 2023",
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "Weather application displaying real-time weather data with beautiful UI and animations.",
      tags: ["React", "API Integration", "CSS3", "Charts"],
      image: "https://via.placeholder.com/400x300?text=Weather",
      link: "#",
      date: "Sep 2023",
    },
    {
      id: 6,
      title: "Task Management App",
      description: "Productivity app with task creation, management, and analytics features.",
      tags: ["React", "Redux", "Local Storage", "UI/UX"],
      image: "https://via.placeholder.com/400x300?text=Task+Manager",
      link: "#",
      date: "Aug 2023",
    },
  ];

  return (
    <section className="Blog" id="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h1>My Projects</h1>
          <p className="subtitle">Explore my latest work and creations</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="project-link">
                    <FaArrowRight />
                    View Project
                  </a>
                </div>
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span className="project-date">
                    <FaCalendar /> {project.date}
                  </span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
