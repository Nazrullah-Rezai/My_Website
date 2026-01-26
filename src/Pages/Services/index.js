import React, { useMemo } from "react";
import { motion } from "framer-motion";
import "./Services.css";
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaChartLine, FaPalette, FaLock } from "react-icons/fa";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useI18n } from "../../utils/i18n";

const Services = () => {
  const { t } = useI18n();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();

  const services = useMemo(() => [
    {
      icon: <FaLaptopCode />,
      title: t("services_web_title"),
      description: t("services_web_desc"),
    },
    {
      icon: <FaMobileAlt />,
      title: t("services_responsive_title"),
      description: t("services_responsive_desc"),
    },
    {
      icon: <FaDatabase />,
      title: t("services_backend_title"),
      description: t("services_backend_desc"),
    },
    {
      icon: <FaChartLine />,
      title: t("services_perf_title"),
      description: t("services_perf_desc"),
    },
    {
      icon: <FaPalette />,
      title: t("services_uiux_title"),
      description: t("services_uiux_desc"),
    },
    {
      icon: <FaLock />,
      title: t("services_security_title"),
      description: t("services_security_desc"),
    },
  ], [t]);

  const process = useMemo(() => [
    {
      number: "01",
      title: t("services_process_1_title"),
      description: t("services_process_1_desc"),
    },
    {
      number: "02",
      title: t("services_process_2_title"),
      description: t("services_process_2_desc"),
    },
    {
      number: "03",
      title: t("services_process_3_title"),
      description: t("services_process_3_desc"),
    },
    {
      number: "04",
      title: t("services_process_4_title"),
      description: t("services_process_4_desc"),
    },
    {
      number: "05",
      title: t("services_process_5_title"),
      description: t("services_process_5_desc"),
    },
    {
      number: "06",
      title: t("services_process_6_title"),
      description: t("services_process_6_desc"),
    },
  ], [t]);

  return (
    <section className="Services" id="services">
      <div className="services-container">
        <motion.div 
          ref={headerRef}
          className="services-header"
          initial={{ opacity: 0, y: -30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1>{t("services_title")}</h1>
          <p className="subtitle">{t("services_subtitle")}</p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          ref={servicesRef}
          className="services-grid"
          initial={{ opacity: 0 }}
          animate={servicesVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={servicesVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 30 }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.15)" }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div 
          ref={processRef}
          className="process-section"
          initial={{ opacity: 0, y: 40 }}
          animate={processVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2>{t("services_process_title")}</h2>
          <div className="process-grid">
            {process.map((step, index) => (
              <motion.div 
                key={index} 
                className="process-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={processVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="process-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
