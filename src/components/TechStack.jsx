import "../styles/techStack.css";

import dataTech from "../data/dataTech.json";

export default function TechStack() {
  const techBlock = dataTech.dataTech.map((tech) => (
    <div className="techStack-block" key={tech.id}>
      <img
        src={require(`../images/tech/${tech.img}`)}
        className="techStack-photo"
      />
      <p className="techStack-photo-title">{tech.name}</p>
    </div>
  ));
  return (
    <section className="techStack-main-block">
      <div name="tech" className="techStack-content">
        <h2 className="techStack-title">Technologies I use</h2>

        <p className="techStack-text">
          Here is the techology that I already know and also starting to learn.
        </p>

        <div className="techStack-content-tech">{techBlock}</div>
      </div>
    </section>
  );
}
