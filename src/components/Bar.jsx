import "../styles/bar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../images/logo.svg";

export default function Bar() {
  return (
    <div className="bar-content">
      <Link to="about" smooth={true} duration={1000} className="bar-link">
        About
      </Link>

      <Link to="portfolio" smooth={true} duration={1000} className="bar-link">
        Portfolio
      </Link>
      <img
        onClick={() => scroll.scrollToTop()}
        className="bar-logo"
        src={Logo}
      />
      <Link to="tech" smooth={true} duration={1000} className="bar-link">
        Tech
      </Link>

      <Link to="contact" smooth={true} duration={1000} className="bar-link">
        Contact
      </Link>
    </div>
  );
}
