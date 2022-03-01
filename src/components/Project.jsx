import "../styles/project.css";
import { ExternalLink } from "react-external-link";

export default function Project({ card }) {
  const technologies = card.tech.map((technology) =>
    technology.length > 0 ? (
      <div className="project-tech" key={technology}>
        {technology}
      </div>
    ) : null
  );
  return (
    <div className="project-content">
      <img src={card.imgProject} className="project-img" />
      <div className="project-block">
        <div className="project-text">
          <p className="project-title">{card.name}</p>
          <p>{card.text}</p>
        </div>
        <div className="project-tech-block">{technologies}</div>
        <div className="project-text">
          <ExternalLink href={card.web} className="project-app">
            <span>Visit the site</span>
          </ExternalLink>
          <ExternalLink href={card.git} className="project-git">
            <span>Source code</span>
          </ExternalLink>
        </div>
      </div>
    </div>
  );
}
