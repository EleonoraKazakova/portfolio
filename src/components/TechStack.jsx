import "../styles/techStack.css";
import Figma from "../images/tech/figma.png";
import CSS from "../images/tech/CSS.png";
import Firebase from "../images/tech/firebase.png";
import Git from "../images/tech/Git.png";
import HTML from "../images/tech/html.png";
import Jest from "../images/tech/jest.png";
import JS from "../images/tech/js.png";
import MYSQL from "../images/tech/mysql.png";
import ReactIMG from "../images/tech/React.png";
import ReactTest from "../images/tech/reactTest.png";
import SASS from "../images/tech/sass.png";
import TS from "../images/tech/ts.jpg";

export default function TechStack() {
  const imgTech = [
    { img: JS, name: "JavaScript" },
    { img: TS, name: "TypeScript" },
    { img: HTML, name: "HTML" },
    { img: ReactIMG, name: "React" },
    { img: SASS, name: "SASS" },
    { img: CSS, name: "CSS" },
    { img: ReactTest, name: "React testing library" },
    { img: Jest, name: "Jest" },
    { img: Git, name: "Git" },
    { img: MYSQL, name: "" },
    { img: Figma, name: "MYSQL" },
    { img: Firebase, name: "Firebase" },
  ];

  const techBlock = imgTech.map((tech) => (
    <div className="techStack-block">
      <img src={tech.img} className="techStack-photo" />
      <p>{tech.name}</p>
    </div>
  ));
  return (
    <div name="tech" className="techStack-content">
      <div className="techStack-content-tech">{techBlock}</div>
    </div>
  );
}
