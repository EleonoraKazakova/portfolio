import "../styles/footer.css";
import Codewars from "../images/footer/codewars.svg";
import Envelope from "../images/footer/envelope.svg";
import Github from "../images/footer/github.svg";
import Linkedin from "../images/footer/linkedin.svg";
import Location from "../images/footer/location.svg";
import Phone from "../images/footer/phone.svg";
import { ExternalLink } from "react-external-link";

export default function Footer() {
  const contacts = [
    {
      id: 0,
      img: Envelope,
      text: (
        <a href="mailto:eleonora.kazakova89@gmail.com" className="footer-link">
          eleonora.kazakova89@gmail.com
        </a>
      ),
    },
    {
      id: 1,
      img: Phone,
      text: (
        <a href="tel:+46707994751" className="footer-link">
          +46 70 799 4751
        </a>
      ),
    },
    { id: 2, img: Location, text: "Uppsala, Sweden" },
  ];

  const contactBlock = contacts.map((contact) => (
    <div className="footer-contact-line" key={contact.id}>
      <img src={contact.img} className="footer-contact-img" />
      <p>{contact.text}</p>
    </div>
  ));

  const media = [
    {
      id: 0,
      img: Linkedin,
      link: "https://www.linkedin.com/in/eleonora-kazakova-0841b07a/",
    },
    { id: 1, img: Github, link: "https://github.com/EleonoraKazakova" },
    {
      id: 2,
      img: Codewars,
      link: "https://www.codewars.com/users/Eleonora%20Kazakova",
    },
  ];
  const mediaBlock = media.map((imgMedia) => (
    <div key={imgMedia.id}>
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
            <p className="footer-text">
              Here is my contact information if you are interested in
              interviewing me.
            </p>
            <div className="footer-contact-block">{contactBlock}</div>
          </div>
        </div>
      </div>
      <div className="footer-media-block">{mediaBlock}</div>
    </div>
  );
}
