import React, { useMemo } from "react";
import { motion } from "framer-motion";
import "./About.css";
import { FaCode, FaGraduationCap, FaBriefcase, FaHeart } from "react-icons/fa";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useI18n } from "../../utils/i18n";

const About = () => {
  const { t } = useI18n();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();

  const skills = useMemo(
    () => [
      {
        category: "Frontend",
        items: [
          "React",
          "JavaScript (ES6+)",
          "HTML5",
          "CSS3",
          "TypeScript",
          "Tailwind CSS",
        ],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "MongoDB", "SQL", "MySQL", "REST APIs"],
      },
      {
        category: "Tools",
        items: [
          "Git",
          "VS Code",
          "npm/yarn",
          "Azure DevOps",
          "GitHub",
          "Visual Studio",
        ],
      },
      {
        category: "Other",
        items: ["Responsive Design", "UI/UX", "Problem Solving", "Team Work"],
      },
    ],
    [],
  );

  return (
    <section className="About" id="about">
      <div className="about-container">
        <motion.div
          ref={headerRef}
          className="about-header"
          initial={{ opacity: 0, y: -30 }}
          animate={
            headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
          }
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1>{t("about_title")}</h1>
          <p className="subtitle">{t("about_subtitle")}</p>
        </motion.div>

        {/* Intro Section */}
        <motion.div
          ref={introRef}
          className="about-intro"
          initial={{ opacity: 0, x: -50 }}
          animate={introVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="intro-text">
            <h2>{t("about_intro_title")}</h2>
            <p>{t("about_intro_p1")}</p>
            <p>{t("about_intro_p2")}</p>
          </div>
          <motion.div
            className="intro-icon"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaCode size={80} />
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          ref={skillsRef}
          className="skills-section"
          initial={{ opacity: 0, y: 40 }}
          animate={skillsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2>{t("about_skills_title")}</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                className="skill-group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  skillsVisible
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5 }}
              >
                <h3>{skillGroup.category}</h3>
                <ul>
                  {skillGroup.items.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Values Section */}

        <h2>{t("about_values_title")}</h2>
        <div className="values-grid">
          <div className="value-card">
            <FaCode size={40} />
            <h3>{t("about_values_clean_title")}</h3>
            <p>{t("about_values_clean_desc")}</p>
          </div>
          <div className="value-card">
            <FaHeart size={40} />
            <h3>{t("about_values_ux_title")}</h3>
            <p>{t("about_values_ux_desc")}</p>
          </div>
          <div className="value-card">
            <FaBriefcase size={40} />
            <h3>{t("about_values_innov_title")}</h3>
            <p>{t("about_values_innov_desc")}</p>
          </div>
          <div className="value-card">
            <FaGraduationCap size={40} />
            <h3>{t("about_values_learn_title")}</h3>
            <p>{t("about_values_learn_desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
