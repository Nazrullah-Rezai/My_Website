import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonials.css";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useI18n } from "../../utils/i18n";

const Testimonials = () => {
  const { t } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ghafar Noorzahi",
      role: t("testimonial_ghafar_role"),
      company: t("testimonial_ghafar_company"),
      portfolio: "https://gnoorzahi.com",
      text: t("testimonial_ghafar_text"),
      rating: 5,
      image: "https://gnoorzahi.com/images/me.png",
    },
    {
      id: 2,
      name: t("testimonial_placeholder_name"),
      role: t("testimonial_placeholder_role"),
      company: t("testimonial_placeholder_company"),
      text: t("testimonial_placeholder_text"),
      rating: 5,
      image: "https://i.pravatar.cc/150?img=12",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="Testimonials" id="testimonials">
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 variants={itemVariants}>{t("testimonials_title")}</motion.h1>
          <motion.p variants={itemVariants}>
            {t("testimonials_subtitle")}
          </motion.p>
        </motion.div>

        <motion.div
          className="testimonials-carousel"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="testimonial-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>

              <p className="testimonial-text">{testimonials[currentIndex].text}</p>

              <div className="testimonial-rating">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>

              <div className="testimonial-author">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="author-image"
                />
                <div className="author-info">
                  {testimonials[currentIndex].portfolio ? (
                    <h3>
                      <a
                        href={testimonials[currentIndex].portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="author-link"
                      >
                        {testimonials[currentIndex].name}
                      </a>
                    </h3>
                  ) : (
                    <h3>{testimonials[currentIndex].name}</h3>
                  )}
                  <p>{testimonials[currentIndex].role}</p>
                  <p className="company">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button className="carousel-btn prev" onClick={prevTestimonial}>
            <FaChevronLeft />
          </button>
          <button className="carousel-btn next" onClick={nextTestimonial}>
            <FaChevronRight />
          </button>
        </motion.div>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToTestimonial(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        <motion.div
          className="testimonials-stats"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="stat" variants={itemVariants}>
            <h2>20+</h2>
            <p>{t("stat_projects")}</p>
          </motion.div>
          <motion.div className="stat" variants={itemVariants}>
            <h2>100%</h2>
            <p>{t("stat_satisfaction")}</p>
          </motion.div>
          <motion.div className="stat" variants={itemVariants}>
            <h2>3.5</h2>
            <p>{t("stat_experience")}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
