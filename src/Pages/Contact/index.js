import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useI18n } from "../../utils/i18n";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const { t } = useI18n();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const [formStatus, setFormStatus] = useState({ state: "idle", message: "" });

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: t("contact_email_title"),
      value: "nasrollah.rzi@gmail.com",
      link: "mailto:nasrollah.rzi@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: t("contact_phone_title"),
      value: "+49 171 2337149",
      link: "tel:+491712337149",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: t("contact_location_title"),
      value: t("contact_location_value"),
      link: "#",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus({ state: "loading", message: t("contact_sending") });

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY },
      )
      .then(
        () => {
          setFormStatus({ state: "success", message: t("contact_success") });
        },
        () => {
          setFormStatus({ state: "error", message: t("contact_error") });
        },
      );
  };

  return (
    <section className="Contact" id="contact">
      <div className="contact-container">
        <motion.div
          ref={headerRef}
          className="contact-header"
          initial={{ opacity: 0, y: -30 }}
          animate={
            headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
          }
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1>{t("contact_title")}</h1>
          <p className="subtitle">{t("contact_subtitle")}</p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Info */}
          <motion.div
            ref={infoRef}
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={
              infoVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2>{t("contact_info_title")}</h2>
            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="info-card"
                  target={info.link.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    infoVisible
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 15px 35px rgba(212, 175, 55, 0.2)",
                  }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <h3>{info.title}</h3>
                  <p>{info.value}</p>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="social-links"
              initial={{ opacity: 0, y: 20 }}
              animate={
                infoVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            >
              <h2>{t("contact_connect_title")}</h2>
              <div className="social-buttons">
                <motion.a
                  href="https://github.com/Nazrullah-Rezai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn github"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(212, 175, 55, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("contact_social_github")}
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/nazrullah-rezai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn linkedin"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(212, 175, 55, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("contact_social_linkedin")}
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={formVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2>{t("contact_form_title")}</h2>
            <form className="contact-form" onSubmit={sendEmail} ref={form}>
              <div className="form-group">
                <label htmlFor="name">{t("contact_form_name")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={t("contact_form_name_ph")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t("contact_form_email")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={t("contact_form_email_ph")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t("contact_form_message")}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  placeholder={t("contact_form_message_ph")}
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={formStatus.state === "loading"}
              >
                {formStatus.state === "loading"
                  ? t("contact_sending")
                  : t("contact_form_submit")}
              </button>

              {formStatus.state !== "idle" && (
                <p className={`form-status ${formStatus.state}`}>
                  {formStatus.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
