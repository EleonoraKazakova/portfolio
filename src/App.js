import "./styles/app.css";
import Hero from "./components/Hero";
import Bar from "./components/Bar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Tech from "./components/TechStack";
import Footer from "./components/Footer";

// Formatting: Well formated using Prettier or done by hand?
// File extension: Use .jsx to understand what are react components -1
// Export command: Don't forget to put the export in one line. Right now I won't remove points, but in future projects i will.
function App() {
  return (
    <div className="app-grid">
      {/* You dont need to have a div wrapping the component to add a class, you can add that class directly to the component. */}
      {/* Check how we added the classNames "welcome-screen" adn "shopping-screen" on the todo. */}
      <div className="app-hero">
        {/* Tags -1 The navigation bar should be outside the hero */}
        <Bar />
        <Hero />
      </div>

      {/* the div is not neccesary, add the class directly to the component */}
      <div className="app-about">
        <About />
      </div>

      {/* the div is not neccesary, add the class directly to the component */}
      <div className="app-portfolio">
        <Portfolio />
      </div>

      {/* the div is not neccesary, add the class directly to the component */}
      <div className="app-tech">
        <Tech />
      </div>

      {/* the div is not neccesary, add the class directly to the component */}
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
