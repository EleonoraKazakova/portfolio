import PropTypes from "prop-types";
import Modal from "./Modal";
import "../styles/card.css";
import { useState } from "react";
import Project from "./Project";

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    imgProject: PropTypes.string,
    tech: PropTypes.array,
    text: PropTypes.string,
    git: PropTypes.string,
    web: PropTypes.string,
    status: PropTypes.bool,
  }),
};

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
