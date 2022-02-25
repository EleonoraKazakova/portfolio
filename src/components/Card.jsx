import Modal from "./PopUpWindow";
import "../styles/card.css";
import { useState } from "react";
import { ExternalLink } from "react-external-link";

export default function Card({ card }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log("card.tech:", card.tech);
  return (
    <div className="card-photo-name" key={card.id}>
      <button onClick={() => setIsOpen(true)}>
        <img src={card.img} className="card-photo" />
        <p>{card.name}</p>
      </button>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <img src={card.img} />
        <div className="card-title">
          <p>{card.name}</p>
          <p>{card.text}</p>
        </div>
        <div className="card-tech-block">
          {card.tech.map((t) => (
            <div className="card-tech">{t}</div>
          ))}
        </div>
        <ExternalLink href={card.web} className="card-app">
          <span>Visit the site</span>
        </ExternalLink>
        <ExternalLink href={card.git} className="card-git">
          <span>Look at the git</span>
        </ExternalLink>
      </Modal>
    </div>
  );
}
