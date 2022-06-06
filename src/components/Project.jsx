import "../styles/project.css";
import { ExternalLink } from "react-external-link";

export default function Project({ card }) {
  const technologies = card.tech.map((technology) => (
    <div className="project-tech" key={technology}>
      {technology}
    </div>
  ));
  return (
    <section className="project-content">
      <img
        src={require(`../images/${card.imgProject}`)}
        className="project-img"
      />
      <div className="project-block">
        <p className="project-title">{card.name}</p>
        <p className="project-text">{card.text}</p>

        <div className="project-tech-block">{technologies}</div>

        <ExternalLink href={card.web} className="project-app">
          <span>Visit the site</span>
        </ExternalLink>
        <ExternalLink href={card.git} className="project-git">
          <span>Source code</span>
        </ExternalLink>
      </div>
    </section>
  );
}
