import "../styles/bar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../images/logo.svg";

export default function Bar() {
  return (
    <div className="bar-content">
      <Link to="about" smooth={true} duration={1000}>
        About
      </Link>

      <Link to="portfolio" smooth={true} duration={1000}>
        Portfolio
      </Link>
      <img
        onClick={() => scroll.scrollToTop()}
        className="bar-logo"
        src={Logo}
      />
      <Link to="tech" smooth={true} duration={1000}>
        Tech
      </Link>

      <Link to="contact" smooth={true} duration={1000}>
        Contact
      </Link>
    </div>
  );
}
