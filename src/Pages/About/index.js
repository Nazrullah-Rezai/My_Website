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
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();

  const skills = useMemo(() => [
    { category: "Frontend", items: ["React", "JavaScript", "HTML/CSS", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"] },
    { category: "Tools", items: ["Git", "VS Code", "npm/yarn", "webpack", "Docker"] },
    { category: "Other", items: ["Responsive Design", "UI/UX", "Problem Solving", "Team Work"] },
  ], []);

  const timeline = useMemo(() => [
    {
      year: "2020",
      title: t("about_timeline_2020_title"),
      description: t("about_timeline_2020_desc"),
    },
    {
      year: "2021",
      title: t("about_timeline_2021_title"),
      description: t("about_timeline_2021_desc"),
    },
    {
      year: "2022",
      title: t("about_timeline_2022_title"),
      description: t("about_timeline_2022_desc"),
    },
    {
      year: "2024",
      title: t("about_timeline_2024_title"),
      description: t("about_timeline_2024_desc"),
    },
  ], [t]);

  return (
    <section className="About" id="about">
      <div className="about-container">
        <motion.div 
          ref={headerRef}
          className="about-header"
          initial={{ opacity: 0, y: -30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
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
                animate={skillsVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
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

        {/* Timeline Section */}
        <motion.div 
          ref={timelineRef}
          className="timeline-section"
          initial={{ opacity: 0 }}
          animate={timelineVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2>{t("about_timeline_title")}</h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div 
                key={index} 
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={timelineVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              >
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  {index < timeline.length - 1 && <div className="timeline-line"></div>}
                </div>
                <div className="timeline-content">
                  <h3>{item.year}</h3>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          ref={valuesRef}
          className="values-section"
          initial={{ opacity: 0, y: 40 }}
          animate={valuesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;
