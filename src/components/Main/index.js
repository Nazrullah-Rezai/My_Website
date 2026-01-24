import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Services from "../../Pages/Services";
import Blog from "../../Pages/Home/Blog";
import Contact from "../../Pages/Contact";
import { useAOS } from "../../hooks/useAOS";

const Main = () => {
  useAOS();

  return (
    <main>
      <div id="home" data-aos="fade-up">
        <Home />
      </div>
      <div id="about" data-aos="fade-up">
        <About />
      </div>
      <div id="services" data-aos="fade-up">
        <Services />
      </div>
      <div id="blog" data-aos="fade-up">
        <Blog />
      </div>
      <div id="contact" data-aos="fade-up">
        <Contact />
      </div>
    </main>
  );
};

export default Main;
