import skills from "../../Utils/data";
import "./skill.css";

interface Props {
  onSelectSkill: (skill: string) => void;
}

const SkillsFilter: React.FC<Props> = ({ onSelectSkill }) => {
  return (
    <div className="skills">
      <label htmlFor="skill" className="label-skill">
        Sort by
      </label>
      <select
        id="skill"
        className="select-skill"
        onChange={(e) => onSelectSkill(e.target.value)}
      >
        {skills.map((skill) => (
          <option key={skill} value={skill}>
            {skill}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SkillsFilter;
