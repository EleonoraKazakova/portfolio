import "../styles/portfolio.css";
import { data } from "./DataProjects";

import Card from "./Card";

export default function Portfolio() {
  const projectBlock = data.projects.map((project) => (
    <div key={project.id}>
      <Card card={project} />
    </div>
  ));

  return (
    <div className="portfolio-content-block" name="portfolio">
      <h1 className="portfolio-title">Projects</h1>

      <div className="portfolio-text">
        Here are projects I have done and some upcoming projects I will be doing
        during the Frontend course at Novare Potential.
      </div>
      <div className="portfolio-photo-block">{projectBlock}</div>
    </div>
  );
}
