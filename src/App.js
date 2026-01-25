import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Imprint from "./Pages/Imprint";
import Privacy from "./Pages/Privacy";

function App() {
  const renderPage = (Component, name) => {
    document.title = `TaxGo - ${name}`;
    return <Component />;
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
