import "./styles/app.css";
import Hero from "./components/Hero";
import NavigationBar from "./components/NavigationBar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Tech from "./components/TechStack";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <About />
      <Portfolio />
      <Tech />
      <Footer />
    </div>
  );
}

export default App;
