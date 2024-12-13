import { skillsData } from "../../Utils/data";
import CardSkills from "../CardSkills";
import "./skills.css";

const Skills = () => {
  return (
    <div className="container-skills">
      {skillsData.map((skill) => (
        <CardSkills key={skill.title} title={skill.title} Icon={skill.icon} />
      ))}
    </div>
  );
};

export default Skills;
