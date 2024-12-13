import { IconType } from "react-icons";
import "./CardSkills.css";

interface Props {
  title: string;
  Icon: IconType;
}

const CardSkills: React.FC<Props> = ({ title, Icon }) => {
  return (
    <div className="card-skills">
      <Icon size={50} opacity={0.1} className="card-skills-icon" />
      <h3 className="card-skills-title">{title}</h3>
    </div>
  );
};

export default CardSkills;
