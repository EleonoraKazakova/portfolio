import "../styles/footer.css";
import Codewars from "../images/footer/codewars.svg";
import Envelope from "../images/footer/envelope.svg";
import Github from "../images/footer/github.svg";
import Linkedin from "../images/footer/linkedin.svg";
import Location from "../images/footer/location.svg";
import Phone from "../images/footer/phone.svg";
import { ExternalLink } from "react-external-link";

// Component lenght over 50 lines of code -1, you could have extracted the footer info into a json.
// That would force you to think a better way to build the json withouth embedding HTML inside id.
export default function Footer() {
  // Here is the solution
  // 1. put the contacts into the data/contacts.json folder
  // 2. The json should look like:
  /**
   * [
   *  {
   *    id: 0,
   *    image: "envelope.svg"
   *    url: "mailto:eleonora.kazakova89@gmail.com"
   *    label: eleonora.kazakova89@gmail.com
   *  },
   *  {
   *    id: 1,
   *    image: "phone.svg"
   *    url: "tel:+46707994751"
   *    label: +46 70 799 4751
   *  }
   * ]
   */

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
    <div className="footer-content-block" name="contact">
      <div className="footer-block">
        <div className="footer-title">
          <h1>Contact me</h1>
        </div>

        <p className="footer-text">
          Here is my contact information if you are interested in interviewing
          me.
        </p>
        <div className="footer-contact-block">{contactBlock}</div>
      </div>
      <div className="footer-media-block">{mediaBlock}</div>
    </div>
  );
}
