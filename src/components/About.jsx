import "../styles/about.css";
import Photo from "../images/eleonora.png";

export default function About() {
  return (
    <section className="about-main-block">
      <article className="about-content-block" name="about">
        <h2 className="about-title">About</h2>

        <div className="about-text">
          <p>
            Hello! My name is Eleonora, a Junior Frontend Developer. I am glad
            to welcome you to my portfolio website!
          </p>
          <p>
            I am passionate to learn new things and work with technology. I
            enjoy enhancing my skills and participating in new projects. My 5
            years of experience as a graphic designer helps me having an eye for
            the visual part of websites.
          </p>
        </div>

        <div className="about-photo-block">
          <img className="about-photo" src={Photo} />
        </div>
      </article>
    </section>
  );
}
