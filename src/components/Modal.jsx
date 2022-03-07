import "../styles/modal.css";
import ReactDOM from "react-dom";
import Xmark from "../images/xmark-solid.svg";

export default function Modal({ children, open, onClose }) {
  if (!open) return null;
  // add an space between this 2 lines to make it easy to read
  return ReactDOM.createPortal(
    <div>
      <div className="modal-overlay" />
      <div className="modal-styles">
        <div className="modal-name-tech">{children}</div>
        <img onClick={onClose} src={Xmark} className="modal-mark" />
      </div>
    </div>,
    document.getElementById("portal")
  );
}
