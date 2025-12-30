import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  const renderPage = (Component, name) => {
    document.title = `TaxGo - ${name}`;
    return <Component />;
  };

  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
