import "../styles/about.css";
import Photo from "../images/eleonora.png";

export default function About() {
  return (
    <div className="about-content-block" name="about">
      <div className="about-title">
        <h1>About</h1>
      </div>

      <div className="about-text">
        <p className="about-text">
          Hello! My name is Eleonora, a Junior Frontend Developer. I am glad to
          welcome you to my portfolio website!
        </p>
      </div>

      <div className="about-photo-block">
        <img className="about-photo" src={Photo} />
      </div>
    </div>
  );
}
