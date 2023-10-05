import { IconType } from "react-icons";
import { SkillButton } from ".";
import useShowState from "../hooks/useShowState";

type PropsCard = {
  title: string;
  description: string;
  Icon: IconType;
};

const SkillsCard: React.FC<PropsCard> = ({ title, description, Icon }) => {
  const { hidden, showMore } = useShowState();

  return (
    <div className="skill__card">
      <Icon className="skill__icons" />
      <h2 className="skill__title">{title}</h2>
      <SkillButton onClick={showMore}>
        {hidden ? "Hide" : "Show"} Details
      </SkillButton>
      {hidden && <p className="skill__description">{description}</p>}
    </div>
  );
};

export { SkillsCard };
