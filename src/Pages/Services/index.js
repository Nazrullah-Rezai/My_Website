import React from "react";
import "./Services.css";
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaChartLine, FaPalette, FaLock } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description: "Building responsive, fast, and modern web applications using React, JavaScript, and latest technologies.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      description: "Creating mobile-first designs that look great on all devices and screen sizes.",
    },
    {
      icon: <FaDatabase />,
      title: "Backend Development",
      description: "Developing robust server-side applications with Node.js, Express, and MongoDB.",
    },
    {
      icon: <FaChartLine />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, efficiency, and better user experience.",
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces that users love.",
    },
    {
      icon: <FaLock />,
      title: "Security",
      description: "Implementing security best practices to protect applications and user data.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Consultation",
      description: "Understanding your needs and goals for the project.",
    },
    {
      number: "02",
      title: "Planning",
      description: "Creating a detailed plan and timeline for the project.",
    },
    {
      number: "03",
      title: "Development",
      description: "Building the application with best practices and clean code.",
    },
    {
      number: "04",
      title: "Testing",
      description: "Thorough testing to ensure quality and functionality.",
    },
    {
      number: "05",
      title: "Launch",
      description: "Deploying to production and making it live.",
    },
    {
      number: "06",
      title: "Support",
      description: "Providing ongoing support and maintenance.",
    },
  ];

  return (
    <section className="Services" id="services">
      <div className="services-container">
        <div className="services-header">
          <h1>My Services</h1>
          <p className="subtitle">What I can do for you</p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="process-section">
          <h2>My Process</h2>
          <div className="process-grid">
            {process.map((step, index) => (
              <div key={index} className="process-card">
                <div className="process-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
