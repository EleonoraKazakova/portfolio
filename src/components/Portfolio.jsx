import { useState } from "react";
import "../styles/portfolio.css";
import { data } from "./CardForm";
import Modal from "./PopUpWindow";
import Card from "./Card";

export default function Portfolio() {
  //const [isOpen, setIsOpen] = useState(false);
  const projects = data.cards;
  const projectBlock = projects.map((project) => <Card card={project} />);
  console.log("projectBlock:", projectBlock);

  return (
    <div className="portfolio-content" name="portfolio">
      <div className="portfolio-photo-block">{projectBlock}</div>
    </div>
  );
}
