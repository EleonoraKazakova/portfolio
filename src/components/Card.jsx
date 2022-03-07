import Modal from "./Modal";
import "../styles/card.css";
import { useState } from "react";
import Project from "./Project";

export default function Card({ card }) {
  // You have 7 isOpen hooks in the project instead of 1, that why we have the portal so we have only 1 state controlling the item. -1
  const [isOpen, setIsOpen] = useState(false);

  const Active = <img src={card.img} className="card-photo" />;
  const Inactive = (
    <div className="card-parent">
      <img src={card.img} className="card-photo" />
      <div className="card-coming-soon">coming soon</div>
    </div>
  );

  return (
    <div>
      {/* Nesting -1 Here is an example of why nesting is bad. This code is hard to read. Check the suggestion done above */}
      <div onClick={() => setIsOpen(true)} className="card-content">
        {card.status ? Active : Inactive}
        <p>{card.name}</p>
      </div>

      {/* The modal creation code should not be on each Card item, otherwise you would have 10 instances of the modal -10 */}
      {/* Also why is this controlled by the card.text lenght instead of the card.status? */}
      {/* You can use the && to say only "if" insread of ? : to say if else */}
      {card.text.length > 0 && (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <Project card={card} />
        </Modal>
      )}
    </div>
  );
}
