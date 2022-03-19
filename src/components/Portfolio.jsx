import "../styles/portfolio.css";
import dataProject from "../data/dataProject.json";
import Card from "./Card";

export default function Portfolio() {
  const projectBlock = dataProject.projects.map((project) => (
    <Card card={project} key={project.id} />
  ));

  console.log("projectBlock:", projectBlock);
  return (
    <section className="portfolio-main-block">
      <article className="portfolio-content-block" name="portfolio">
        <h2>Portfolio</h2>

        <div className="portfolio-text project-description">
          Here are projects I have done and some upcoming projects I will be
          doing during the Frontend course at Novare Potential.
        </div>
        <div className="portfolio-photo-block">{projectBlock}</div>
      </article>
    </section>
  );
}
