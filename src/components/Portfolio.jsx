import "../styles/portfolio.css";
import { data } from "./DataProjects";

import Card from "./Card";

export default function Portfolio() {
  const projectBlock = data.projects.map((project) => (
    <Card card={project} key={project.id} />
  ));

  return (
    <div className="portfolio-content-block" name="portfolio">
      <h1>Portfolio</h1>

      <div className="portfolio-text project-description">
        Here are projects I have done and some upcoming projects I will be doing
        during the Frontend course at Novare Potential.
      </div>
      <div className="portfolio-photo-block">{projectBlock}</div>
    </div>
  );
}
