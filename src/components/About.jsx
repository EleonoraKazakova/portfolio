import "../styles/about.css";
import Photo from "../images/eleonora.png";

export default function About() {
  return (
    <div className="about-content" name="about">
      <div>
        <img className="about-photo" src={Photo} />
      </div>
    </div>
  );
}
