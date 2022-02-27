import "../styles/footer.css";
import Codewars from "../images/footer/codewars.svg";
import Envelope from "../images/footer/envelope.svg";
import Github from "../images/footer/github.svg";
import Linkedin from "../images/footer/linkedin.svg";
import Location from "../images/footer/location.svg";
import Phone from "../images/footer/phone.svg";
import { ExternalLink } from "react-external-link";

export default function Footer() {
  const media = [
    {
      img: Linkedin,
      link: "https://www.linkedin.com/in/eleonora-kazakova-0841b07a/",
    },
    { img: Github, link: "https://github.com/EleonoraKazakova" },
    {
      img: Codewars,
      link: "https://www.codewars.com/users/Eleonora%20Kazakova",
    },
  ];
  const mediaBlock = media.map((imgMedia) => (
    <div>
      <ExternalLink href={imgMedia.link}>
        <img src={imgMedia.img} className="footer-media" />
      </ExternalLink>
    </div>
  ));

  return (
    <div>
      <div name="contact" className="footer-content">
        <div className="footer-text-contact">
          <h1>Contact me</h1>
          <div className="footer-contact">
            <p>
              Here is my contact information if you are interested in
              interviewing me.
            </p>
            <div>{contactBlock}</div>
          </div>
        </div>
      </div>
      <div className="footer-media-block">{mediaBlock}</div>
    </div>
  );
}
