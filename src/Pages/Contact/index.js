import React from "react";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Danke für deine Nachricht! Ich werde mich bald bei dir melden.");
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "nasrollah.rzi@gmail.com",
      link: "mailto:nasrollah.rzi@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+49 (0) 123 456789",
      link: "tel:+49123456789",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Darmstadt, Germany",
      link: "#",
    },
  ];

  return (
    <section className="Contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p className="subtitle">Let's create something amazing together</p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="info-card"
                  target={info.link.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                >
                  <div className="info-icon">{info.icon}</div>
                  <h3>{info.title}</h3>
                  <p>{info.value}</p>
                </a>
              ))}
            </div>

            <div className="social-links">
              <h2>Connect With Me</h2>
              <div className="social-buttons">
                <a href="https://github.com/Nazrullah-Rezai" target="_blank" rel="noopener noreferrer" className="social-btn github">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/nazrullah-rezai" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2>Send Me a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" required placeholder="Your Name" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required placeholder="your@email.com" />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" name="subject" required placeholder="What is this about?" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows="6" required placeholder="Your message here..."></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
