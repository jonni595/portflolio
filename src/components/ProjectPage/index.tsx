import { projects } from "../../Utils/data";
import Card from "../Card";
import SkillsFilter from "../SkillsFilter";
import "./Project.css";

const Project = () => {
  return (
    <div className="container" id="projects">
      <div className="wrapper">
        <h1>Projects</h1>
        <SkillsFilter onSelectSkill={() => {}} />
        <div className="projects">
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              url={project.url}
              badge={project.badge}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
