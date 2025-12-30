import React from "react";
import "./Home.css";
import profileImage from "../../assets/images/portfoli-without-background.png";
import Button from "../../components/Button";
const Portfolio = () => {
  return (
    <div className="Portfolio">
      <div className="portfolio-text">
        <h3>Hello my name is Nazrullah Rezai</h3>
        <p>I'm a web developer based in Darmstadt.</p>
        <Button className="BubbleButton btn-info">More Info</Button>
      </div>

      <div className="portfolio-myImage">
        <img src={profileImage} alt="Profile" />
      </div>
    </div>
  );
};

export default Portfolio;
