import { useState } from "react";
import "../styles/portfolio.css";
import { data } from "./CardForm";
import Modal from "./PopUpWindow";
import Card from "./Card";

export default function Portfolio() {
  const projects = data.cards;
  const projectBlock = projects.map((project) => <Card card={project} />);
  console.log("projectBlock:", projectBlock);

  return (
    <div className="portfolio-content" name="portfolio">
      <div className="portfolio-title">
        <h1>Projects</h1>
      </div>
      <div className="portfolio-block ">
        <div>
          Here are projects I have done and some upcoming projects I will be
          doing during the Frontend course at Novare Potential.
        </div>
        <div className="portfolio-photo-block">{projectBlock}</div>
      </div>
    </div>
  );
}
