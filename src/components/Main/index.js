import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Services from "../../Pages/Services";
import Blog from "../../Pages/Home/Blog";
import Contact from "../../Pages/Contact";

const Main = () => {
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
