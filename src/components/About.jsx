import "../styles/about.css";
import Photo from "../images/eleonora.png";

export default function About() {
  return (
    <div className="about-content" name="about">
      <div className="about-content-block">
        <div className="about-title">
          <h1>About</h1>
        </div>
        <div className="about-block">
          <img className="about-photo" src={Photo} />
          <p className="about-text">
            Hello! My name is Eleonora, a Junior Frontend Developer. I am glad
            to welcome you to my portfolio website!
          </p>
        </div>
      </div>
    </div>
  );
}
