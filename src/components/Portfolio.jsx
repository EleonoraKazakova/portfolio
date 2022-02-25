import "../styles/portfolio.css";
import { data } from "./CardForm";

export default function Portfolio() {
  const cards = data.cards;
  const cardsBlock = cards.map((project) => (
    <div className="portfolio-photo-name">
      <img src={project.img} className="portfolio-photo" />
      <p>{project.name}</p>
    </div>
  ));

  return (
    <div className="portfolio-content" name="portfolio">
      <div className="portfolio-photo-block">{cardsBlock}</div>
    </div>
  );
}
