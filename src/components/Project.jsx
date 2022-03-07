import "../styles/project.css";
import { ExternalLink } from "react-external-link";

export default function Project({ card }) {
  const technologies = card.tech.map((technology) => (
    <div className="project-tech" key={technology}>
      {technology}
    </div>
  ));
  // add a new line between this 2 lines of code
  return (
    <div className="project-content">
      <img src={card.imgProject} className="project-img" />
      <div className="project-block">
        <p className="project-title">{card.name}</p>
        <p>{card.text}</p>

        <div className="project-tech-block">{technologies}</div>

        {/* Unnecesary plugin -1 */}
        {/* Why a react component when you can do the same with <a> tag? */}
        <ExternalLink href={card.web} className="project-app">
          <span>Visit the site</span>
        </ExternalLink>
        <ExternalLink href={card.git} className="project-git">
          <span>Source code</span>
        </ExternalLink>
      </div>
    </div>
  );
}
