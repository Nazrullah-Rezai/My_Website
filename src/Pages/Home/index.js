import React from "react";
import "./Home.css";
import Portfolio from "../Home/Portfolio";
const Home = () => {
  return (
    <div className="Home">
      <header className="home-header">
        <h1>Welcome to my Website</h1>
      </header>
      <Portfolio />
    </div>
  );
};

export default Home;
