import Modal from "./Modal";
import "../styles/card.css";
import { useState } from "react";
import Project from "./Project";

export default function Card({ card }) {
  const [isOpen, setIsOpen] = useState(false);

  const openedCard = card.status ? (
    <img src={card.img} className="card-photo" />
  ) : (
    <div className="card-parent">
      <img src={card.img} className="card-photo" />
      <div className="card-coming-soon">coming soon</div>
    </div>
  );

  const modalWindow =
    card.text.length > 0 ? (
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Project card={card} />
      </Modal>
    ) : null;

  return (
    <div className="card-photo-name" key={card.id}>
      <button onClick={() => setIsOpen(true)}>
        {openedCard}
        <p>{card.name}</p>
      </button>

      {modalWindow}
    </div>
  );
}
