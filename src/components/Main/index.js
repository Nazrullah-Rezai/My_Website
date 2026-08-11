import { useEffect } from "react";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Services from "../../Pages/Services";
import Blog from "../../Pages/Home/Blog";
import Contact from "../../Pages/Contact";

const Main = () => {
  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <main>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
};

export default Main;
