import "./styles/App.css";
import Hero from "./components/Hero";
import Bar from "./components/Bar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Tech from "./components/TechStack";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-grid">
      <div className="app-hero">
        <Bar />
        <Hero />
      </div>
      <div className="app-about">
        <About />
      </div>
      <div className="app-portfolio">
        <Portfolio />
      </div>
      <div className="app-tech">
        <Tech />
      </div>
      <div className="app-contact">
        <Contact />
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
