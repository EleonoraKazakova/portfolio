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
    { id: 0, img: JS, name: "JavaScript" },
    { id: 1, img: TS, name: "TypeScript" },
    { id: 2, img: HTML, name: "HTML" },
    { id: 3, img: ReactIMG, name: "React" },
    { id: 4, img: SASS, name: "SASS" },
    { id: 5, img: CSS, name: "CSS" },
    { id: 6, img: ReactTest, name: "React testing library" },
    { id: 7, img: Jest, name: "Jest" },
    { id: 8, img: Git, name: "Git" },
    { id: 9, img: MYSQL, name: "MYSQL" },
    { id: 10, img: Figma, name: "Figma" },
    { id: 11, img: Firebase, name: "Firebase" },
  ];

  const techBlock = imgTech.map((tech) => (
    <div className="techStack-block" key={tech.id}>
      <img src={tech.img} className="techStack-photo" />
      <p className="techStack-photo-title">{tech.name}</p>
    </div>
  ));
  return (
    <div name="tech" className="techStack-content">
      <h1 className="techStack-title">Technologies I use</h1>

      <p className="techStack-text">
        Here is the techology that I already know and also starting to learn.
      </p>

      <div className="techStack-content-tech">{techBlock}</div>
    </div>
  );
}
