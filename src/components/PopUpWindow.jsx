import "../styles/popUpWindow.css";
import ReactDOM from "react-dom";
import Xmark from "../images/xmark-solid.svg";

export default function Modal({ children, open, onClose }) {
  if (!open) return null;
  const [img, name, tech, text, web, git] = children;
  console.log("tech:", tech);
  console.log("children:", children);
  return ReactDOM.createPortal(
    <div>
      <div className="modal-OVERLAY_STYLES" />
      <div className="modal-MODALSTYLES">
        {img}
        <div className="modal-name-tech">
          {name}
          {text}

          {tech}
          {web}
          {git}
        </div>
        <img onClick={onClose} src={Xmark} className="modal-mark" />
      </div>
    </div>,
    document.getElementById("portal")
  );
}
