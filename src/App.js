import "./App.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
function App() {
  const renderPage = (Component, name) => {
    document.title = `TaxGo - ${name}`;
    return <Component />;
  };

  return (
    <>
      <Navbar />
      <Main />
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
