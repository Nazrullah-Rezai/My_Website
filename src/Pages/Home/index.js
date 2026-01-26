import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Portfolio from "./Portfolio";
import "./Home.css";

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      {/* Portfolio Hero with Logo & Photo */}
      <Portfolio />
    </section>
  );
};

export default Home;
