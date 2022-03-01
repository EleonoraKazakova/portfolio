import "../styles/modal.css";
import ReactDOM from "react-dom";
import Xmark from "../images/xmark-solid.svg";

export default function Modal({ children, open, onClose }) {
  if (!open) return null;
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
