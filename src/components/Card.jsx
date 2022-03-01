import Modal from "./Modal";
import "../styles/card.css";
import { useState } from "react";
import Project from "./Project";

export default function Card({ card }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setIsOpen(true)} className="card-content">
        {card.status ? (
          <img src={card.img} className="card-photo" />
        ) : (
          <div className="card-parent">
            <img src={card.img} className="card-photo" />
            <div className="card-coming-soon">coming soon</div>
          </div>
        )}
        <p>{card.name}</p>
      </div>

      {card.text.length > 0 ? (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <Project card={card} />
        </Modal>
      ) : null}
    </div>
  );
}
