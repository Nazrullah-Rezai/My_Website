import React, { useMemo } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import profileImage from "../../assets/images/portfoli-without-background.png";
import Button from "../../components/Button";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaRocket,
  FaPalette,
} from "react-icons/fa";
import { useI18n } from "../../utils/i18n";

const Portfolio = () => {
  const { t } = useI18n();

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

  const skills = useMemo(
    () => [
      {
        icon: <FaCode />,
        title: t("skill_webdev_title"),
        desc: t("skill_webdev_desc"),
      },
      {
        icon: <FaRocket />,
        title: t("skill_perf_title"),
        desc: t("skill_perf_desc"),
      },
      {
        icon: <FaPalette />,
        title: t("skill_design_title"),
        desc: t("skill_design_desc"),
      },
    ],
    [t],
  );

  return (
    <div className="Portfolio">
      <motion.div
        className="portfolio-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.h1
            className="portfolio-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Nazrullah Rezai
          </motion.h1>
          <motion.p
            className="portfolio-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {t("portfolio_subtitle")}
          </motion.p>
        </motion.div>

        <motion.p
          className="portfolio-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          {t("portfolio_description")}
        </motion.p>

        <motion.div
          className="portfolio-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Button className="BubbleButton btn-primary" onClick={handleViewWork}>
            {t("portfolio_cta_work")}
          </Button>
          <Button
            className="BubbleButton btn-secondary"
            onClick={handleContact}
          >
            {t("portfolio_cta_contact")}
          </Button>
        </motion.div>

        <motion.div
          className="portfolio-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="https://github.com/Nazrullah-Rezai"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nazrullah-rezai"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:nasrollah.rzi@gmail.com"
            className="social-link"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="portfolio-myImage"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <motion.div
          className="image-container"
          initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={profileImage} alt="Nazrullah Rezai" loading="lazy" />
        </motion.div>

        <motion.div
          className="skills-container"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
