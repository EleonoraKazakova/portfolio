import Modal from "./Modal";
import "../styles/card.css";
import { useState } from "react";
import Project from "./Project";

export default function Card({ card }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      {card.status ? (
        <button
          onClick={() => setIsOpen(true)}
          className="card-content card-content-cursor-pointer"
        >
          <img src={require(`../images/${card.img}`)} className="card-photo" />
          <p>{card.name}</p>
        </button>
      ) : (
        <button onClick={() => setIsOpen(true)} className="card-content">
          <div className="card-parent">
            <img
              src={require(`../images/${card.img}`)}
              className="card-photo"
            />
            <div className="card-coming-soon">coming soon</div>
          </div>

          <p>{card.name}</p>
        </button>
      )}

      {card.text.length > 0 ? (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <Project card={card} />
        </Modal>
      ) : null}
    </section>
  );
}
