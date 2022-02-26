import Modal from "./PopUpWindow";
import "../styles/card.css";
import { useState } from "react";
import { ExternalLink } from "react-external-link";

export default function Card({ card }) {
  const [isOpen, setIsOpen] = useState(false);

  const technologies = card.tech.map((t) =>
    t.length > 0 ? <div className="card-tech">{t}</div> : null
  );

  return (
    <div className="card-photo-name" key={card.id}>
      <button onClick={() => setIsOpen(true)}>
        {card.status ? (
          <img src={card.img} className="card-photo" />
        ) : (
          <div className="card-parent">
            <img src={card.img} className="card-photo" />
            <div className="card-coming-soon">coming soon</div>
          </div>
        )}
        <p>{card.name}</p>
      </button>

      {card.text.length > 0 ? (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <img src={card.img} />
          <div className="card-content">
            <div className="card-title">
              <p>{card.name}</p>
              <p>{card.text}</p>
            </div>
            <div className="card-tech-block">{technologies}</div>
            <div className="card-title">
              <ExternalLink href={card.web} className="card-app">
                <span>Visit the site</span>
              </ExternalLink>
              <ExternalLink href={card.git} className="card-git">
                <span>Look at the git</span>
              </ExternalLink>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
